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

type HomeTemplate struct {
}

var (
	defaultSeoData = &SEOData{
		Image:       getStaticPath(""),
		Description: "Nouveau Printemps 2024",
		Domain:      "nouveauprintemps.org",
	}
	templates *template.Template
	files     *embed.FS
)

func Setup(fs *embed.FS) {
	files = fs
	t := template.Must(template.ParseFS(fs, "templates/base/*.gohtml"))
	templates = t
}

func (t *HomeTemplate) Render(w http.ResponseWriter) {
	data := TemplateData{
		Title: "Accueil",
		SEO: &SEOData{
			Title:       "Accueil",
			URL:         "/",
			Description: "",
		},
	}
	renderTemplate(w, "home", &data)
}

func renderTemplate(w http.ResponseWriter, name string, data *TemplateData) {
	mergeSeoData(data.SEO)
	template.Must(templates.ParseFS(files, getFile(name)))
	err := templates.ExecuteTemplate(w, "base", data)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		slog.Error("error while rendering template", "err", err.Error())
	}
}

func mergeSeoData(s *SEOData) {
	s.Domain = defaultSeoData.Domain
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
