var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var discoverPartials = require('metalsmith-discover-partials');
var permalinks = require('metalsmith-permalinks');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
var assets = require('metalsmith-assets');
var youtube = require('metalsmith-youtube');
var dateFormatter = require('metalsmith-date-formatter');
var drafts = require('metalsmith-drafts');
 
metalsmith

metalsmith(__dirname)
.metadata({
  site: {
    name: 'Informatropico',
    description: "Think, Read e Dev Progress"
  }
})
.source('./src')
.destination('./public')
.use(collections({
  dev: {
    pattern: 'devProgress/**/*.md',
    sortBy: 'date',
    reverse: true
    },
  think: {
    pattern: 'thinkProgress/**/*.md',
    sortBy: 'date',
    reverse: true
    },
  read: {
    pattern: 'readProgress/**/*.md',
    sortBy: 'datafine',
    reverse: true
    },
  ultimidev: {
    pattern: 'devProgress/**/*.md',
    sortBy: 'date',
    reverse: true,
    limit: 5,
  },
  ultimithink: {
    pattern: 'thinkProgress/**/*.md',
    sortBy: 'date',
    reverse: true,
    limit: 5,
  }
  }))
.use(assets({
  source: './assets', // relative to the working directory
  destination: './assets' // relative to the build directory
}))
.use(youtube({
  controls: true,
  showTitle: true,
  privacy : true 
}))
.use(dateFormatter({
  dates: [
      {
          key: 'date',
          format: 'YYYY MM DD'
      },
      {
          key: 'datainizio',
          format: 'YYYY MM DD'
      },
      {
        key: 'datafine',
        format: 'YYYY MM DD'
      }
  ]
}))
.use(drafts())
.use(markdown())
.use(permalinks({
  relative: false,
  pattern: ':title',
}))
.use(discoverPartials({
  directory: './layouts/partials'
}))
.use(layouts({
  engine: 'handlebars',
  pattern: ["*/*/*html","*/*html","*html"],
  }))
.use(serve({
  port: 8081,
  verbose: true
  }))
.use(watch({
  paths: {
    "${source}/**/*": true,
    "layout/**/*": "**/*",
  }
}))
.build(function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('InformatrpicoBlog built!');
  }
});