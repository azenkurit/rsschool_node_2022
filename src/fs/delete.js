import fs from 'fs';
export const remove = async () => {
    // Write your code here 
    if ( !fs.existsSync("./files/fileToRemove.txt") ) {
        throw new Error("FS operation failed")
    }
    fs.unlinkSync("./files/fileToRemove.txt", ()=>{})
};
remove();