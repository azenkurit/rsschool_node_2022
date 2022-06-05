import { exec, execFileSync } from "child_process";

export const spawnChildProcess = async (args) => {
    // Write your code here
    const child = exec(`node "./files/script.js" ${args}`, (err, stdout, stderr) => {
        stdout.write( stdout );
    })
};

spawnChildProcess();