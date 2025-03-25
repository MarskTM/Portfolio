package env

import (
	"crypto/rsa"
	"flag"
	"fmt"
	"os"

	"github.com/BurntSushi/toml"
	"github.com/go-chi/jwtauth"
	"github.com/go-redis/redis"
	"github.com/golang/glog"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type DBConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Name     string
	SSLMode  string
}

type ServerConfig struct {
	Env        string
	AppPort    string
	HttpURL    string
	RootPath   string
	StaticPath string
	PublicPath string

	DBConfig
}

var (
	// 1. Server information
	serverConfig ServerConfig

	// 2. Server plugin
	db         *gorm.DB
	encodeAuth *jwtauth.JWTAuth
	decodeAuth *jwtauth.JWTAuth
	privateKey *rsa.PrivateKey
	publicKey  string

	redisURL    string
	redisClient *redis.Client
)

func init() {
	// Setup logging
	_ = flag.Set("log_dir", "./log")    // Đường dẫn log mặc định
	_ = flag.Set("logtostderr", "true") //
	_ = flag.Set("v", "3")              // Verbosity level mặc định

	// Get version ARGS
	var version int
	flag.IntVar(&version, "env", 1, "select version dev v1 or pro v2")

	var initDB bool
	flag.BoolVar(&initDB, "db", false, "allow recreate model database in postgres")
	flag.Parse()

	// 2. Load environment parameters
	glog.V(1).Info("env version: ", version)
	loadEnvParameters(version)

	// 3. Install dependencies

}

func loadEnvParameters(version int) {
	root, _ := os.Getwd()
	glog.V(1).Info(" loading environment parameters from ", root)

	// 1. Load environment parameters
	var env string
	if version == 0 {
		env = "dev"
	} else {
		env = "pro"
	}

	_, err := toml.Decode(fmt.Sprintf("%s/env_%s.toml", root, env), &serverConfig)
	if err != nil {
		glog.Error("Error loading.env." + env + " file")
	}
}

func goDotEnvVariable(key string) string {
	// load .env file
	err := godotenv.Load(".env")
	if err != nil {
		glog.Error("Error loading .env file")
	}

	return os.Getenv(key)
}

// ----------------------------------------------------------------
func GetEnvironment() ServerConfig {
	return serverConfig
}

func GetDB() *gorm.DB {
	return db
}
