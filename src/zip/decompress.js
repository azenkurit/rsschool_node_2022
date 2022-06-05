import { createReadStream, createWriteStream } from "fs";
import { createUnzip, unzip } from "zlib";
import { pipeline } from "stream";

export const decompress = async () => {
    const gzip = createUnzip();
    const input = createReadStream('./files/archive.gz');
    const otput = createWriteStream('./files/fileToCompress.txt');

    input.pipe(gzip).pipe(otput);
};

decompress();