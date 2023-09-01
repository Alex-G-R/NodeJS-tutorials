const fs = require("fs");

const first = fs.readFileSync("./Scripts/content/first.txt", "utf-8");
const second = fs.readFileSync("./Scripts/content/second.txt", "utf-8");

console.log(first, second);

// Node will write this is this file, if it doesnt exist it will create it 
fs.writeFileSync(
    "./Scripts/content/result-sync.txt",
    `Here is the result: ${first}, ${second}`
)