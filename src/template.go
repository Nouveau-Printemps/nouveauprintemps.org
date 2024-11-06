package src

import (
	"html/template"
	"log/slog"
	"net/http"
)

type Template interface {
	Render(http.ResponseWriter)
}

type TemplateData struct {
	Title string
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
)

func (t *HomeTemplate) Render(w http.ResponseWriter) {
	seo := SEOData{
		Title:       "Accueil",
		URL:         "/",
		Description: "",
	}
	mergeSeoData(&seo)
	err := template.Must(template.ParseFiles(
		getFile("home"),
	)).ExecuteTemplate(w, "base", seo)
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
	return "templates/pages/" + path + ".gohtml"
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
