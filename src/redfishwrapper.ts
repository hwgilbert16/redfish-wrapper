import Request from "./request";

export default class Redfish {
    constructor(username: string, password: string, apiUrl: string) {
        const request = new Request(username, password, apiUrl);
    }
}
