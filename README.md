# WVU Pattern Library -- Masthead Module

[![Build Status](https://travis-ci.org/wvu-patterns/wvu-patterns-masthead.svg?branch=master)](https://travis-ci.org/wvu-patterns/wvu-patterns-masthead)

Use [Bower](http://bower.io/) to install this module.

```bash
$ bower install --save wvu-patterns-masthead
```

## Dependencies

```
"wvu-patterns-search": "1.0.0",
"wvu-utilities-variables": "1.0.0",
"neat" : "1.7.2"
```

### SCSS Overridable defaults

```scss
//  Variable options for WVU Masthead Background:
//  gold | blue | white | blue-pattern | gold-pattern
//  default: blue
//==================================================

$wvu-masthead-background: 'blue' !default;


// Variable options for WVU Masthead Signature:
// boolean: true | false
// default: true
//==================================================

$wvu-masthead-has-signature: true !default;

// Variable options for WVU Masthead Two Line Title:
// boolean: true | false
// default: false
//==================================================
$wvu-masthead-two-line-lockup: false !default;
```

## Pattern Development

Requires:

* Ruby ~= 2.2.3
* NodeJS >= 4.1.2
* Gulp >= 3.8.11

*RVM is Preferred* but not required

#### Installation

```bash
$ git clone https://github.com/wvu-patterns/wvu-patterns-masthead.git
$ cd wvu-patterns-masthead
$ gem install bundler
$ bundle install
$ npm install
$ bower install
```

#### Pattern Testing

* `gulp` will create a build directory so you can view pattern at `localhost:3000`
* `gulp ci` will run lint test to make sure the .scss files are parseable and valid
