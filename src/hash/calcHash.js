import crypto from "crypto";
import fs from "fs";

export const calculateHash = async () => {
    // Write your code here 
    console.log( crypto.createHash("sha256").update(fs.readFileSync("./files/fileToCalculateHashFor.txt").toString()).digest("hex"))
};

calculateHash();