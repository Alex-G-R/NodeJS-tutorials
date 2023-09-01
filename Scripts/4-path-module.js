const path = require("path");

// Prints out your path seperator
console.log(path.sep);

const filePath = path.join("/content","subfolder","test.txt");
console.log(filePath);

// last file, in this example test.txt
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname,"content","subfolder","text.txt");
console.log(absolute);