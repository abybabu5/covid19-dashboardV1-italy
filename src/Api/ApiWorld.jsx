import {ajax} from "rxjs/ajax";
//This returning a promise that will be resolved with the data
export class ApiWorld {
    static URL = "https://corona.lmao.ninja/v2/";
    static fetch = (url, method = "GET", body) => {
        return ajax({
            url: ApiWorld.URL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).toPromise()
            .then((res) => res.response);
    }
}

export default ApiWorld;
