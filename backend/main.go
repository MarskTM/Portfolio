package main

import (
	"log"
	"net/http"
	"time"

	"github.com/MarskTM/Portfolio/Backend/infrastructures/env"
	"github.com/MarskTM/Portfolio/Backend/router"
	"github.com/golang/glog"
	_ "github.com/golang/glog"
)

func main() {

	// go run main
	enviroment := env.GetEnvironment()
	glog.V(1).Info("Environment: ", enviroment.Env)
	glog.V(1).Info("Server URL: ", enviroment.HttpURL)
	glog.V(1).Info("Database name: ", enviroment.DBConfig.Name)
	glog.V(1).Infof("Server running at port: %+v\n", enviroment.AppPort)

	s := &http.Server{
		Addr:           ":" + enviroment.AppPort,
		Handler:        router.Router(),
		ReadTimeout:    6000 * time.Second,
		WriteTimeout:   6000 * time.Second,
		MaxHeaderBytes: 1 << 30,
	}
	log.Fatal(s.ListenAndServe())
}
