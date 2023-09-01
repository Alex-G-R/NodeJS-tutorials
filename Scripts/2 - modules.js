// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Import names form names.js
const names = require("./2.1 - names");
//console.log(names);

// Import sayHi function form utils.js
const sayHi = require("./2.2 - utils");

sayHi("alex");
sayHi(names.john);
sayHi(names.peter);