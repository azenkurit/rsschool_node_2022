import fs from "fs";
export const list = async () => {
    // Write your code here 
    if ( !fs.existsSync("./files")) {
        throw new Error("FS operation failed");
    }
    console.log( fs.readdirSync("./files"));
};
list();