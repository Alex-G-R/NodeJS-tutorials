const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Home page");
    } else if(req.url === "/about"){
        // BLOCKING CODE !!!!
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 100; j++){
                console.log(`${i}, ${j}`);
            }
        }
        // Now we need to wait untill the nested for loops end, and only then ANY page will showUp
        res.end("About page");
    } else{
        res.end("No such page bozo")
    }
});

server.listen(3000, ()=>{
    console.log("Listening on port: 3000....");
});