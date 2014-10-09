# WVU Pattern Library -- Masthead Module

[![Build Status](https://travis-ci.org/wvu-patterns/wvu-patterns-masthead.svg?branch=master)](https://travis-ci.org/wvu-patterns/wvu-patterns-masthead)

Use [Bower](http://bower.io/) to install this module.

```bash
$ bower install --save wvu-patterns-masthead
```

### Overrideable defaults

```scss
$wvu-masthead-small-breakpoint: 'min-width: 38em' !default;
$wvu-masthead-large-breakpoint: 'min-width: 87.5em' !default;
```

###Pattern Development

Requires:

* Ruby 1.9.3-p484
* NodeJS
* Gulp

*RVM is Preferred* but not required

####Installation

* `cd {install-dir}/wvu-patterns-masthead`
* `gem install bundler`
* `bundle install`
* `npm install`

####Pattern Testing

* `gulp test` will create a build directory so you can view pattern
* `gulp ci` will run lint test to make sure .scss file is valid
