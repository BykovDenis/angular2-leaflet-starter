import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class HttpTeamService {
    constructor(private http: Http) {}

    getWorkers() {
        return this.http.get(`data/team.json`);
    }
}