import fetchAdapter from "@vespaiach/axios-fetch-adapter";
// import "regenerator-runtime/runtime.js";

const axios = require('axios').default;

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     adapter: fetchAdapter
// });


export class SomeClass {
    getName(): string {
        return 'name';
    }

    getback() {
        axios.request({
            url: 'https://api.github.com/gists/abc',
            method: 'get',
            adapter: fetchAdapter,
            headers: {
                Authorization: `Bearer`
            }
        }).then(function (response: any) {
            // handle success
            console.log(response);
        }).catch(function (error: any) {
            // handle error
            console.log(error);
        })
            .then(function () {
                // always executed
            });
    }

}
