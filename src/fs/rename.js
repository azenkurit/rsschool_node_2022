import fs from "fs";

export const rename = async () => {
    // Write your code here 
    if ( !fs.existsSync("./files/wrongFilename.txt") || fs.existsSync("./files/properFilename.txt")) {
        throw new Error("FS operation failed")
    }
    fs.renameSync("./files/wrongFilename.txt", "./files/properFilename.txt", ()=>{});
};
rename();