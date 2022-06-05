import fs from "fs";

export const write = async () => {
    const wStream = fs.createWriteStream("./files/fileToWrite.txt");
    process.stdin.on("data", function( dat ){
        wStream.write( dat.toString() )
    })
};


write();