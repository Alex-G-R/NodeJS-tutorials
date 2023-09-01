const fs = require("fs");

fs.readFile("./Scripts/content/first.txt", "utf8", (error, result)=>{
    // IF there is an error print it and return
    if(error){
        console.log(`Error occured: ${error}`);
        return;
    }

    // If error not occured create a variable with the value of result
    const first = result;

    // Then read the second file using the same functionality as in the case of the first one
    fs.readFile("./Scripts/content/second.txt", "utf8", (error, result)=>{
        if(error){
            console.log(`Error occured: ${error}`);
            return;
        }
        const second = result;
        fs.writeFile(
            "./Scripts/content/result-async.txt",
            `Here is the result: ${first}, ${second}`,
            (error, result)=>{
                if(error){
                    console.log(`Error occured: ${error}`);
                    return;
                }
                console.log("The process went succesfull");
            });
    });
});