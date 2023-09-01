// require OS module (notice no dot)
const os = require("os");

// information about current user
const user = os.userInfo();
//console.log(user);

// Get the uptime of the device (in seconds)
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);