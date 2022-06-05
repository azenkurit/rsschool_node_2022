export const parseEnv = () => {
    // Write your code here 
    let s = process.env;
    for ( let envs in s ) {
        console.log( `RSS_${envs} = ${s[envs]} `);
    }
};

parseEnv();