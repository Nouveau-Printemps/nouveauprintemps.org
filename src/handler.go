package src

import "net/http"

func HandleHome(w http.ResponseWriter, r *http.Request) {
	home := HomeTemplate{}
	home.Render(w)
}

func HandleLegal(w http.ResponseWriter, r *http.Request) {
	legal := LegalTemplate{}
	legal.Render(w)
}
