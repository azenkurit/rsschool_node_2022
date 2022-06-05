import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

export const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const input = createReadStream('./files/fileToCompress_.txt');
    const otput = createWriteStream('./files/archive.gz');

    input.pipe(gzip).pipe(otput);
};

compress();