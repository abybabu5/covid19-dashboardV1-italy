import {ajax} from "rxjs/ajax";

//This returning a promise that will be resolved with the data
export class ApiGlobalToday {
    static URL = "https://api.covid19api.com/";
    static fetch = (url, method = "GET", body) => {
        return ajax({
            url: ApiGlobalToday.URL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).toPromise()
            .then((res) => res.response);
    }
}

export default ApiGlobalToday;
