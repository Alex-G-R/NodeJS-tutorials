const http = require("http");
const fs = require('fs').promises;

const server = http.createServer(async function (req, res){
    try{
        //const text = await fs.readFile("./content/big.txt");
        //res.end(text)

        const fileStream = await fs.createReadStream("./content/big.txt", "utf8")
        fileStream.on('open',()=>{
            fileStream.pipe(res);
        });

        fileStream.on('error',(err)=>{
            res.end(err);
        });
    }   
    catch(err){
        console.log(err)
    }
})

server.listen(3000);
