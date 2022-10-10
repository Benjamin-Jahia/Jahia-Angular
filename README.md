# Jahia with Angular Front

> Note: `Sample project to bind an Angular front to a Jahia app`

### Usage

Clone Project and run 
```sh
docker-compose up --build
```
Connect to `localhost:4200` using a non CORS blocking navigator.
(eg: _chrome.exe --disable-web-security --user-data-dir=C:/chromeTemp_)

### Infos

Two Docker containers will be built and started.

The JAHIA_Angular container uses 3 provisioning files : 

* `create-token.groovy` : Inserts a token for Api access to Jahia
* `...authorization-myapp.yml` : Adds an authorization scope to allow Graphql queries
* `provisionning.yaml`: Installs required modules and the Digitall site (needs cleanup since we only use jdnt:company from the site)