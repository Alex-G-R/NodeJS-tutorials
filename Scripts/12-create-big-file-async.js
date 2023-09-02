const{ writeFile } = require('fs').promises;

console.log("1")
const start = async() =>{
    console.log("2")
    try{
        console.log("3")
        for(let i = 0; i < 100000; i++){
            await writeFile(
                "./content/big.txt",
                `Hello World vol. ${i} \n`, 
                { flag: 'a' }
            )
        }
        console.log("4")
    } 
    catch(err) {
        console.log(`Error encountered: ${err}`)
    }
    console.log("5")
}
console.log("6")
start();
console.log("7")
