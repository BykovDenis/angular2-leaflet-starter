import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {FormsModule}   from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./components/app/app.component";
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {MainFooterComponent} from "./components/main-footer/main-footer.component";
import {FeaturesComponent} from "./components/features/features.component";
import {VaneLanguageComponent} from "./components/vane-language/vane-language.component";
import {SubscribeComponent} from "./components/subscribe/subscribe.component";
import {MainSliderComponent} from "./components/main-slider/main-slider.component";

@NgModule({
    imports: [FormsModule, BrowserModule],
    bootstrap: [AppComponent],
    declarations: [
        MainNavComponent,
        FeaturesComponent,
        MainFooterComponent,
        VaneLanguageComponent,
        SubscribeComponent,
        MainSliderComponent,
        AppComponent
    ]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
