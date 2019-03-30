# Inspectlet as ES module
[![npm](https://img.shields.io/npm/v/inspectlet-es.svg)](https://www.npmjs.com/package/inspectlet-es)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/inspectlet-es.svg)

ES module for [Inspectlet](https://www.inspectlet.com).

## Install
```sh
$ npm install --save inspectlet-es
```

## Usage
Pick your favorite:
```js
const { insp, install } = require("inspectlet-es");
```
```js
import insp, { install } from 'inspectlet-es';
```

... then:
```js
install(12345678);    // Substitute your ID
```

From there `insp()` can be used as a substitute to `__insp.push()`. `window.__insp` can also be used if you need access to the raw array:
```js
// Equivalent statements :
insp(['identify', "john@example.com"]);
window.__insp.push(['identify', "john@example.com"]);
```