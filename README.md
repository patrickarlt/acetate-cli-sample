# Acetate + NPM scripts Example

This repo shows a potential setup for using Acetate with an NPM scripts-centeric build system.

This sample utilizes several other libraries and tools in addition to Acetate to create a compelte build system:

* [acetate](http://acetate.io) - building HTML pages
* [browserify](http://browserify.org/) - building JavaScript
* [watchify](https://npmjs.com/package/watchify) - faster development for browserify
* [node-sass](https://www.npmjs.com/package/node-sass) - compileing SASS to CSS
* [imagemin-newer](https://www.npmjs.com/package/imagemin-newer) - compress images
* [hashmark](https://github.com/keithamus/hashmark) - add versions to assets for cachebusting

## Usage

1. Download or fork and clone this repo
2. `cd` into the folder
3. `npm install`
4. `acetate server --open`