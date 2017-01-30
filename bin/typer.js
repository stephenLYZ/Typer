#!/usr/bin/env node
'use strict'

var program = require('commander')
var path = require('path')
var fs = require('fs-extra')
var yaml = require('yamljs')

var ignore = '.DS_Store'
var config = '# site title\ntitle:\n\n# github user\nuser:\n\n# issue repo\nrepo:\n\n# token\ntoken:'

program
  .allowUnknownOption()
  .usage(' <command>')

// display version
program
  .command('version')
  .description('Typer version is ')
  .action(function(){
    console.log(require('../package.json').version)
  })

// init
program
  .command('init [folder]')
  .description('Create a diary.')
  .action(function(folder) {
    folder = folder || ''
    var files = [
      { name: '.gitignore', data: ignore },
      { name: 'config.yml', data: config }
    ]
    fs.copySync(path.join(__dirname, '../dist'), path.join(process.cwd(), folder))

    files.forEach(function(file) {
      var fileName = path.join(process.cwd(), folder, file.name)
      if (!fs.existsSync(fileName)) {
            fs.outputFileSync(fileName, file.data)
      }
    })

    console.log('Successful !! Please modify "config.yml" and then run typer build')

  })

// build
program
  .command('build')
  .description('Build a diary.')
  .action(function() {
    var config = yaml.load(process.cwd() +'/config.yml')
    var html = fs.readFileSync(process.cwd() +'/index.html', 'utf-8')

    if (!config.title || !config.user || !config.repo ) {
            return console.log('Please finish your configure information !!')
    }

    token = token.replace(/[\r\n]+/g, '')
    config.token = token.charAt(0) +'#'+ token.substr(1)
    html = html.replace('$config', JSON.stringify(config))
    fs.outputFileSync(process.cwd() +'/index.html', html)

    console.log('Good ~ Enjoy typer everyday :)')
  })

  program
    .parse(process.argv)
