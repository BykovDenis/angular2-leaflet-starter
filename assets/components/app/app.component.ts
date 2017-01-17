import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app",
    template: require<any>("./app.component.html"),
    providers: []
})

export class AppComponent {};
