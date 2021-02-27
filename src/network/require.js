import axios from 'axios';

export function request(config) {
    return new Promise((resolve,reject)=>{
        const instance = axios.create({
            baseURL:"http://localhost:3000"
        });
        instance(config)
            .then(res=>{
                resolve(res);
            })
            .catch(err=>{
                reject(err)
            })
    })
}