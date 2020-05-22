import {ajax} from "rxjs/ajax";
//This returning a promise that will be resolved with the data
export class ApiGithub {
    static URL = "https://cloud.ariken.it:8008/pcm-dpc/COVID-19/master/dati-json/";
    static fetch = (url, method = "GET", body) => {
        return ajax({
            url: ApiGithub.URL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).toPromise()
            .then((res) => res.response);
    }
}

export default ApiGithub;
