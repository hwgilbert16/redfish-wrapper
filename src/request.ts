import got from "got";

interface Headers {
    [key: string]: any;
}

interface Options {
    requestType: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    route: string
}

export default class Request {
    private apiUrl: string;
    private headers: Headers;
    private http: any;

    constructor (username: string, password: string, apiUrl: string) {
        this.headers = {
            username: username,
            password: password
        };
        this.apiUrl = apiUrl;
        this.http = got.extend({
            username: username,
            password: password,
            responseType: "json"
        });
    }

    public send(options: Options) {
        const endpointUrl: string = new URL(options.route, this.apiUrl).toString();

        switch (options.requestType) {
            case "GET":
                return this.http.get(endpointUrl);
            case "POST":
                return this.http.post(endpointUrl);
            case "PUT":
                return this.http.put(endpointUrl);
            case "PATCH":
                return this.http.patch(endpointUrl);
            case "DELETE":
                return this.http.delete(endpointUrl);
        }
    }
}
