export const transform = async () => {
    // Write your code here 
    process.stdin.on("data", function(dat){
        let s = dat.toString().split('');
        process.stdout.write( s.reverse().join('') )
    })
};

transform();