# performance-matters-server-side
Assignment: What is the core functionality of my OBA app, and how can I render it server-side?  

[Link to audit](https://github.com/Sam-Guliker/performance-matters-server-side/blob/update/audit.md)
![Link to the user story]()
![application](images/app.png)

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

## Server-side
file structure  
![filestructure](images/filestructure.png)

## Browserify
I've build some the build.js file in browserify, I just dont know
how to run it with local host yet.  
![package](images/packagejson.png)

## Client Side
I've got some enhancement with the client side.  
When you got javascript turned on you can use the search input.  
![clientside](images/clientside.png)

## What's up next?
### Data
I have a lot of duplicates in my data I'd like to combine  
them and push them into an `array`.

me trying really hard to fix that #$@!
![datacleaning](images/datacleaning.png)

### Routing
I had my routing fixed but unfortunately I couldn't get my fetch  
into an module. So I just used one router instead. :eyes:

### Features
* [Express](https://expressjs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Path](https://nodejs.org/api/path.html)
* [bodyParser](https://github.com/expressjs/body-parser)

### License
Copyright © 2018 Sam Guliker. Released under the [MIT license](https://opensource.org/licenses/MIT)
