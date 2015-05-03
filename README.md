# getSelectionTexts [![Build Status](https://travis-ci.org/azu/getSelectionTexts.svg?branch=master)](https://travis-ci.org/azu/getSelectionTexts)

getSelection support multiple ranges.

## Installation

    npm install getSelectionTexts

## Usage

```js
var getSelectionTexts = require("getSelectionTexts");
getSelectionTexts();// ["selected", "text"];
```

## Tests

```
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start
npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT