const { createReadStream } = require('fs');

const stream = createReadStream("./content/big.txt");

stream.on('data', (result)=>{
    console.log(result);
});

stream.on('err', (err)=>{
    console.log(err);
});