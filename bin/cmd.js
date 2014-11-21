#!/usr/bin/env node

// Dependencies
var readline = require('readline'),
	clivas = require('clivas'),
	minimist = require('minimist'),
	fs = require('fs'),
	path = require('path'),
	flash = require('../');


var argv = minimist(process.argv.slice(2), {
  alias: {
    a: 'assistant',
    u: 'url',
    h: 'help',
    v: 'version'
  },
  boolean: [ // options that are always boolean
    'help',
    'version'
  ],
  default: {
    port: 9000
  }
});

if (argv.version) {
  console.log(require('../package.json').version)
  process.exit(0)
}

clivas.clear();

if(argv.help || !process.argv[2]){

  fs.readFileSync(path.join(__dirname, 'logo.txt'), 'utf8')
    .split('\n')
    .forEach(function (line) {
      clivas.line('{grey:' + line.substring(0, 27) + '}{white:' + line.substring(27) + '}')
    });

  console.log(function () {/*
  Usage:
      mashflash <options>

  Options:
      -a, --assistant         start interactive assistant
      -l, --list              list available firmware modules
      -h, --help              display this help message
      -v, --version           print the current version

  Contribute your own!  https://github.com/latrasis/mashflash

    */}.toString().split(/\n/).slice(1, -1).join('\n'))
  process.exit(0)
}


// flash().from('linksys').to('linksys');