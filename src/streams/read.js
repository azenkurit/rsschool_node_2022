import fs from 'fs';
export const read = async () => {
    // Write your code here 
    const chinks = [];

    const rStream = fs.createReadStream("./files/fileToRead.txt");
    rStream.on( 'data', function( chunk ){
        chinks.push( chunk );
    })
    rStream.on("end", function(){
        process.stdout.write( Buffer.concat(chinks).toString() )
    })
};

read();