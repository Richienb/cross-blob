# cross-blob [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/cross-blob/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/cross-blob)

Cross-platform Blob implementation for Node.js and the Web.

[![NPM Badge](https://nodei.co/npm/cross-blob.png)](https://npmjs.com/package/cross-blob)

## Install

```sh
npm install cross-blob
```

## Usage

```js
const Blob = require("cross-blob");

new Blob([]);
//=> Blob {size: 0, type: ""}

// Global patch (to support external modules like is-blob).
globalThis.Blob = Blob;
```

## API

### Blob extends [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
