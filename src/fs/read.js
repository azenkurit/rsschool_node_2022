import fs from "fs";
export const read = async () => {
    // Write your code here 
    if (!fs.existsSync("./files/fileToRead.txt")) {
        throw new Error("FS operation failed")
    } 
    console.log( (fs.readFileSync("./files/fileToRead.txt")).toString());
};
read();