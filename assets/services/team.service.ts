import {Injectable} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()
export class HttpTeamService {
    constructor(private http: Http) {}

    getWorkers() {
        return this.http.get(`themes/openweathermap/assets/vendor/owm/data/team.json`);
    }
}
