// npm - global command, comes with NodeJS
// npm --version

// local dependency - use it only in this project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// paclage.json - manifest file (stores important info bout our project)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step approach, enter to skip)
// npm init -y (everything default)


const _ = require("lodash");

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);