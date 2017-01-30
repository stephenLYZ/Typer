## Typer

[![TeamCity CodeBetter](https://img.shields.io/teamcity/codebetter/bt428.svg?maxAge=2592000)]()
[![VersionEye](https://img.shields.io/versioneye/d/ruby/rails.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()

![typer](https://cloud.githubusercontent.com/assets/11830681/22433740/6136635e-e754-11e6-98a8-22c1fba15085.png)


> A diary generator powered by Github issues && React && React-router.

## Demo

[Click Here!](https://stephenlyao.github.io/diary/)

## Usage

### 1. Install typer

`$ (sudo) npm install -g @vueact/typer`

### 2. Init folder

create a folder   

```
$ mkdir diary
$ cd diary
$ typer init
```

or  

`$ typer init diary`

Then you will see the files tree like this:   

-- diary
 -- index.html
 -- typer.[hash].js
 -- vendor.[hash].js
 -- config.yml
 -- .gitignore

### 3. Configure

Modify the `config.yml`:

```
# site title
title: 'Typer'

# github user's name
user: 'stephenLYao'

# issue repo, all diary content from here
repo: 'diary'

# token
token:

```

**Add access token is up to you, however I suggest to do so.**

Go to [https://github.com/settings/tokens](https://github.com/settings/tokens)   

![](https://cloud.githubusercontent.com/assets/2193211/20244206/d4d72a80-a9b2-11e6-9c0d-bb557cab90ec.png)  

### 4. Build

Run build to generate diary

`$ typer build`

### 5. Deploy
Now push all files to the repo `gh-pages` branch which you modify in the `config.yml`,
and Everything has done, Just have typer :)


## Todo

- [] add theme configure

**very thanks [Mirror](https://github.com/LoeiFy/Mirror)! **

## License
MIT
