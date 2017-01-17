import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: "main-nav",
    template: require<any>("./main-nav.component.html"),
    providers: []
})

export class MainNavComponent {

    public flagMenuVane: boolean = false;
    public flagMenuMaps: boolean = false;
    public flagNavMenu: boolean = false;

    getNav(){
        if(!this.flagNavMenu) {
            mainNav.classList.add('main-nav__items--enable');
        } else {
            mainNav.classList.remove('main-nav__items--enable');
        }
        this.flagNavMenu = !this.flagNavMenu;
    }

    getToggle() {
        debugger;
        let node = event.target.parentNode;
        let element = document.getElementById(node.id);
        if(element) {
            var menuVane = element.querySelector('.main-nav__sub-items');
            if(node.id === 'menu-vane') {
                if(!this.flagMenuVane) {
                    menuVane.classList.add('main-nav__sub-items--enable');
                    var icon = element.querySelector('.icon__caret-down');
                    icon.classList.remove('icon__caret-down');
                    icon.classList.add('icon__caret-up');
                } else {
                    menuVane.classList.remove('main-nav__sub-items--enable');
                    var icon = element.querySelector('.icon__caret-up');
                    icon.classList.add('icon__caret-down');
                    icon.classList.remove('icon__caret-up');
                }
                this.flagMenuVane = !this.flagMenuVane;
            }
            if(node.id === 'menu-maps') {
                if(!this.flagMenuMaps) {
                    menuVane.classList.add('main-nav__sub-items--enable');
                    var icon = element.querySelector('.icon__caret-down');
                    icon.classList.remove('icon__caret-down');
                    icon.classList.add('icon__caret-up');
                } else {
                    menuVane.classList.remove('main-nav__sub-items--enable');
                    var icon = element.querySelector('.icon__caret-up');
                    icon.classList.add('icon__caret-down');
                    icon.classList.remove('icon__caret-up');
                }
                this.flagMenuMaps = !this.flagMenuMaps;
            }
        }
    }



};
