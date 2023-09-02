const {readFile, writeFile} = require("fs").promises;
// const util = require("util");
// 
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        // const first = await readFilePromise("./content/first.txt", "utf8");
        // const second = await readFilePromise("./content/second.txt", "utf8");

        const first = await readFile("./content/first.txt", "utf8");
        const second = await readFile("./content/second.txt", "utf8");

        // await writeFilePromise(
        //     "./content/result-mind-grenade.txt",
        //     "Hello i am working! a, b, c an 123", 
        //     { flag: 'a' }
        // )

        await writeFile(
            "./content/result-mind-grenade.txt",
            "Hello i am working! a, b, c an 123", 
            { flag: 'a' }
        )

        console.log(first, second);
    } catch(error) {
        console.log(error)
    }
}

start();


//const getText = (path) =>{
//    return new Promise((resolve, reject)=>{
//
//        readFile(path, "utf8", (err, data)=>{
//            if(err){
//                // If there is an error present, spit it out 
//                reject(err);
//            } else {
//                resolve(data);
//            }
//        });
//
//    });
//}

//getText("./content/first.txt")
//    .then((result) => console.log(result))
//    .catch((err) => console.log(err))
