import fs from "fs";

export const create = async () => {       
    // Write your code here 
    if ( fs.existsSync("./files/fresh.txt") ) {
        throw new Error("FS operation failed")
    }
    else {
        fs.writeFile("./files/fresh.txt", "I am fresh ang young", function( err ) {})
    }    
};
create();