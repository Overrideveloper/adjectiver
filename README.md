# @overrideveloper/adjectiver

[![npm version](https://badge.fury.io/js/%40overrideveloper%2Fadjectiver.svg)](https://badge.fury.io/js/%40overrideveloper%2Fadjectiver)

Returns adjectives that begin with first character of input.

## Install

```
$ npm install @overrideveloper/adjectiver --save
```

## Usage

```js
const adjectiver = require("@overrideveloper/adjectiver");

adjectiver.getAdjectives(3, "Tolu");
//=> [ 'Textual', 'Tensionless', 'Textile' ]

adjectiver.getAdjective("Korede");
//=> "Kindest"

adjectiver.getAdjectives("Korede", 3);
//=> Uncaught TypeError: parameter 'count' should be a number

adjectiver.getAdjectives(3, 5);
//=> Uncaught TypeError: parameter 'noun' should be a string

adjectiver.getAdjective(3);
//=> Uncaught TypeError: parameter 'noun' should be a string
```

##### N.B: These adjectives have not been filtered.