import os from "os";
import { Worker } from "worker_threads";
export const performCalculations = async () => {

    let indStart = 10;
    const resultArr = [];
    let workers = [];
    for ( let i=0; i<os.cpus().length; i++ ) {
        resultArr[i] = {
            status: "not resolved",
            data: -1
        };
        workers[i] = new Worker("./worker.js", { workerData: {num: indStart+i+1}});
        workers[i].once("message", result => {
            resultArr[i] = {
                status: "resolved",
                data: result
            };
            console.log( resultArr )
        })
    }
    
};

performCalculations();