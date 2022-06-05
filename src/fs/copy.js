import fs from "fs";
export const copy = async () => {
    // Write your code here 
    if ( fs.existsSync("./files_copy") ) {
        throw new Error("FS operatiob failed");
    }
    fs.mkdirSync("./files_copy");
    fs.readdirSync("./files").forEach( file => {
        fs.writeFileSync(`./files_copy/${file}`, fs.readFileSync(`./files/${file}`))
    })
};
copy();