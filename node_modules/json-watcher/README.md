# Json watcher

This library purpose is to watch and parse a given json file.

## Install

```js
npm install --save json-watcher
```

## Usage

```javascript
let watch = require('json-watcher')
watch(jsonFile.path).then(watcher => {
    watcher.on('error', error => console.log('error', error))
    watcher.on('change', json => console.log('json', json))
})
```
