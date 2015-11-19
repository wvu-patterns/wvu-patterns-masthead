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

### SCSS Overrideable defaults

```scss
/*
  Variable options for WVU Masthead Background:
  gold | blue | white | blue-pattern | gold-pattern
  default: blue
*/
$wvu-masthead-background: 'blue' !default;

/*
  Variable options for WVU Masthead Signature:
  boolean: true | false
  default: true
*/
$wvu-masthead-has-signature: true !default;

/*
  Variable options for WVU Masthead Two Line Title:
  boolean: true | false
  default false
*/
$wvu-masthead-two-line-lockup: false !default;

/*
  Flying WVU Logo
*/
$flying-wv-blue: 'https://patterns.wvu.edu/images/flying-wv-blue.png' !default;

/*
  Flying WV Logos with Signatures
*/
$flying-wv-w-signature: 'https://patterns.wvu.edu/images/flying-wv-w-signature.png' !default;
$flying-wv-w-signature-gold-bg: 'https://patterns.wvu.edu/images/flying-wv-w-signature-gold-bg.png' !default;
$flying-wv-w-signature-white-bg: 'https://patterns.wvu.edu/images/flying-wv-w-signature-white-bg.png' !default;

/*
  Brand Pattern Backgrounds
*/
$wvu-pattern-blue-bg: 'https://patterns.wvu.edu/images/pattern-blue.jpg' !default;
$wvu-pattern-gold-bg: 'https://patterns.wvu.edu/images/pattern-gold.jpg' !default;

```

###Pattern Development

Requires:

* Ruby ~= 2.2.3
* NodeJS >= 4.1.2
* Gulp >= 3.8.11

*RVM is Preferred* but not required

####Installation

* `cd {install-dir}/wvu-patterns-masthead`
* `gem install bundler`
* `bundle install`
* `npm install`

####Pattern Testing

* `gulp test` will create a build directory so you can view pattern
* `gulp ci` will run lint test to make sure .scss file is valid
