# performance-matters-server-side
Assignment: What is the core functionality, and how can I render it server-side?

The site must contain an overview page and detail page.

## Starting
Forking the repo and using `npm` to set up your dev environment
fork the repo:

```
git clone https://github.com/cmda-minor-web/performance-matters-server-side
```

### Yeoman
I wanted to try [Yeoman](http://yeoman.io/), yeoman is a tool to generate new projects with best practices.

global install:
```
npm install -g yo.
```

installing a generator.  
This generator is for an express project. You can also run different  ones such as webapp.
```
npm install --global generator-express
```
run it
```
yo express
```

Yeoman will give you different options to build your project.

![yoexpress](images/yoexpress.png)

#### Features of Yeoman
* Basic or MVC style file structure.
* CoffeeScript Support
* Gulp or Grunt build tools with file watching and live-reload
* Editor-config
* Support of view engines
  - Pug
  - Handlebars
  - Swig
  - EJS
  - Marko
  - Nunjucks
* Supported css pre-processors
  - Sass(Both styles)
  - LESS
  - Stylus
* Supported databases
* MongoDB
* MYSQL
* PostgreSQL
* RethinkDB
* SQLite

## Npm scripts
Running gulp

![npm scripts](images/npmstart.png)

```
npm start
```
