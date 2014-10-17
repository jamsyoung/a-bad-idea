# Directory Reader
Reads the directory and returns a directory listing for a specific directory.

This is a bad idea.  Do not use out in the wide open internet.


## How to set the directory it reads
Use the `DIRECTORY_READER_PATH` environment variable.


## How to deploy
Have the magic SSH key, be on a secret VPN network, then:

```bash
$ git remote add dokku dokku@runn.io:directory-reader
$ git push dokku master
```


## How to use

```bash
$ curl -sS http://localhost:8080/api/latest/htdocs | jq '.'
[
  ".editorconfig",
  ".git",
  ".gitignore",
  ".jscsrc",
  ".jshintrc",
  "Procfile",
  "README.md",
  "node_modules",
  "package.json",
  "server.js"
]

$ curl -sS http://localhost:8080/_healthcheck | jq '.package.version'
"1.0.0"
```
