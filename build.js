const fs = require('fs');
const uglify = require('uglify-js-harmony');
const jsdoc2md = require('jsdoc-to-markdown');
const package = require('./package.json');

function clean(path) {
  let files = fs.readdirSync(path);
  if (files.length > 0) {
    for (let file of files) {
      var filepath = path + '/' + file;
      if (fs.statSync(filepath).isFile()) {
        fs.unlinkSync(filepath);
      } else {
        clean(filepath);
      }
    }
  }
}

function concat(files) {
  let contents = [];

  for (let file of files) {
    let data = fs.readFileSync(file, 'utf8');
    contents.push(data);
  }

  return contents.join('\n');
}

const comment = `/*
 * ${package.name} ${package.version}
 * ${package.description}
 * ${package.homepage}
 * ${package.npmurl}
 */\n\n`;

clean('dist');

const filepaths = fs.readdirSync('lib').filter(function(filename) {
  return filename.substr('-3') === '.js';
}).map(function(filename) {
  return `./lib/${filename}`;
});

fs.writeFile('dist/domnom.js', comment + concat(filepaths), function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('dist/domnom.js was built successfully.');
  }
});

fs.writeFile('dist/domnom.min.js', comment + uglify.minify(filepaths).code, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('dist/domnom.min.js was built successfully.');
  }
});

const readme_template = fs.readFileSync('./README.hbs', 'utf8');

jsdoc2md.render({ files: './lib/*.js', template: readme_template }).then(function(markdown) {
  fs.writeFile('README.md', markdown, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md was built successfully.');
    }
  });
});
