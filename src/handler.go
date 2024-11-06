package src

import "net/http"

func HandleHome(w http.ResponseWriter, r *http.Request) {
	home := HomeTemplate{}
	home.Render(w)
}
