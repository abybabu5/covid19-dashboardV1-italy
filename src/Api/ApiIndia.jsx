import {ajax} from "rxjs/ajax";

//This returning a promise that will be resolved with the data
export class ApiIndia {
    static URL = "https://cloud.ariken.it:8009/";
    static fetch = (url, method = "GET", body) => {
        return ajax({
            url: ApiIndia.URL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).toPromise()
            .then((res) => res.response);
    }
}

export default ApiIndia;
