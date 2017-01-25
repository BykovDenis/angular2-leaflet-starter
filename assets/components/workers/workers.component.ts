import { Component } from "@angular/core";
import { Response} from '@angular/http';
import { HttpTeamService } from '../../services/team.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
    selector: "workers",
    template: require<any>("./workers.component.html"),
    providers: [ HttpTeamService ]
})

export class WorkersComponent {

    public workers = [];

   constructor(private httpService: HttpTeamService) {
       this.renderWorkersData();
   }

    renderWorkersData() {
        this.httpService.getWorkers().subscribe((data: Response) => {
            this.workers = data.json();
        });
    }

};