package main

import (
	"context"
	"embed"
	"github.com/gorilla/mux"
	"log/slog"
	"net/http"
	"nouveauprintemps.org/src"
	"os"
	"os/signal"
	"time"
)

//go:embed templates/*
var templates embed.FS

func main() {
	src.Files = &templates

	r := mux.NewRouter()

	r.HandleFunc("/", src.HandleHome)

	// static files
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./public"))))
	r.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("./dist"))))

	srv := &http.Server{
		Handler:      r,
		Addr:         ":8000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	slog.Info("Starting...")
	go func() {
		if err := srv.ListenAndServe(); err != nil {
			slog.Error(err.Error())
		}
	}()

	slog.Info("Started")
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	<-c

	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()
	err := srv.Shutdown(ctx)
	if err != nil {
		panic(err)
	}
	slog.Info("Shutting down")
	os.Exit(0)
}
