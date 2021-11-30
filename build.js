var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdownit');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var discoverPartials = require('metalsmith-discover-partials');
var permalinks = require('metalsmith-permalinks');
var assets = require('metalsmith-assets');
var youtube = require('metalsmith-youtube');
var dateFormatter = require('metalsmith-date-formatter');
var drafts = require('metalsmith-drafts');

var md = markdown('default', { html: true, typography: true });
md.parser.use(require('markdown-it-footnote'));
md.parser.use(require('markdown-it-attribution'), {marker: '---',});

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
  devNotes: {
    pattern: 'devProgress/devNotes/*.md',
    sortBy: 'date',
    reverse: true
  },
  stms: {
    pattern: 'devProgress/STMS/*.md',
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
    sortBy: 'datainizio',
    reverse: true
  },
  readInCorso: {
    pattern: 'readProgress/InCorso/*.md',
    sortBy: 'datainizio',
    reverse: true
  },
  readNarrativa: {
    pattern: 'readProgress/Narrativa/*.md',
    sortBy: 'datainizio',
    reverse: true
  },
  readSaggistica: {
    pattern: 'readProgress/Saggistica/*.md',
    sortBy: 'datainizio',
    reverse: true
  },
  readPoesia: {
    pattern: 'readProgress/Poesia/*.md',
    sortBy: 'datainizio',
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
        format: 'YYYY.MM.DD'
      },
      {
        key: 'datainizio',
        format: 'YYYY.MM.DD'
      },
      {
        key: 'datafine',
        format: 'YYYY.MM.DD'
      }
  ]
}))
.use(drafts())
.use(md)
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
  partials: './layouts/partials'
}))
.build(function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('InformatrpicoBlog built!');
  }
});