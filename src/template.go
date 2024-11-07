package src

import (
	"embed"
	"html/template"
	"log/slog"
	"net/http"
)

type Template interface {
	Render(http.ResponseWriter)
}

type TemplateData struct {
	Title string
	SEO   *SEOData
}

type SEOData struct {
	Title       string
	URL         string
	Image       string
	Description string
	Domain      string
}

type HomeTemplate struct{}
type LegalTemplate struct{}

var (
	defaultSeoData = &SEOData{
		Image:       getStaticPath(""),
		Description: "Après la tempête, le Soleil finit toujours par se lever, et le Nouveau Printemps se rapproche.",
		Domain:      "nouveauprintemps.org",
	}
	Files *embed.FS
)

func setupTemplates() *template.Template {
	t := template.Must(template.ParseFS(Files, "templates/base/*.gohtml"))
	return t
}

func (t *HomeTemplate) Render(w http.ResponseWriter) {
	data := TemplateData{
		Title: "La confidentialité de vos données n'a jamais été aussi importante",
		SEO: &SEOData{
			URL:         "/",
			Description: "",
		},
	}
	renderTemplate(w, "home", &data)
}

func (t *LegalTemplate) Render(w http.ResponseWriter) {
	data := TemplateData{
		Title: "Mentions légales",
		SEO: &SEOData{
			URL:         "/legal",
			Description: "",
		},
	}
	renderTemplate(w, "legal", &data)
}

func renderTemplate(w http.ResponseWriter, name string, data *TemplateData) {
	mergeData(data)
	t := setupTemplates()
	template.Must(t.ParseFS(Files, getFile(name)))
	err := t.ExecuteTemplate(w, "base", data)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		slog.Error("error while rendering template", "err", err.Error())
	}
}

func mergeData(d *TemplateData) {
	d.Title += " - Nouveau Printemps"
	s := d.SEO
	s.Domain = defaultSeoData.Domain
	s.Title += d.Title
	if s.Image == "" {
		s.Image = defaultSeoData.Image
	}
	if s.Description == "" {
		s.Description = defaultSeoData.Description
	}
}

func getFile(path string) string {
	return "templates/page/" + path + ".gohtml"
}

func getStaticPath(path string) string {
	return "/static/" + path
}

func getAssetsPath(path string) string {
	return "/assets/" + path
}

func (d *TemplateData) GetStaticPath(path string) string {
	return getStaticPath(path)
}

func (d *TemplateData) GetAssetsPath(path string) string {
	return getAssetsPath(path)
}
