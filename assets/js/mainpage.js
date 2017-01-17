/**
 * Created by Denis on 19.12.2016.
 */
'use strict';

document.addEventListener('DOMContentLoaded', function(){

    var controls = document.getElementById('controls');
    var mainSliderTitle = document.querySelector('.main-slider__title');
    var mainSliderDescription = document.querySelector('.main-slider__description');
    var mainSliderLink = document.querySelector('.main-slider__btn');

    if (controls) {

        var params = {
            maxZoom: 14,
            zoom: 11,
            appid: '9de243494c0b295cca9337e1e96b00e2',
        };

        var slides = {
            slide1: {
                mapid: 'map1',
                el: document.getElementById('map1'),
                center: [-24.6714, 15.4955],
                url: 'http://{s}.sat.owm.io/sql/{z}/{x}/{y}',
                urlParams: '?appid=' + params.appid + '&color=brightness(6000:14000)',
                name: 'layer1',
                title: 'Vane Platform',
                description: 'Simple and fast access to environmental data for development of new applications',
                link: '/vaneLanguage',
            },
            slide2: {
                mapid: 'map2',
                el: document.getElementById('map2'),
                center: [27.146, -78.145],
                url: 'http://{s}.sat.owm.io/sql/{z}/{x}/{y}',
                urlParams: '?appid=' + params.appid + '&where=day:2016-273',
                name: 'layer2',
                title: 'VANE Language',
                description: 'SQL fashioned query language for easy and fast ‘speaking’ with satellite images and weather data',
                link: '/vaneLanguage',
            },
            slide3: {
                mapid: 'map3',
                el: document.getElementById('map3'),
                center: [-12.65, 130.51],
                url: 'http://sat.owm.io/rgb/L8B5/L8B4/L8B3/{z}/{x}/{y}',
                urlParams: '?appid=' + params.appid + '&time=2016-214&hi=15000&low=5000',
                name: 'layer3',
                title: 'Operations with images',
                description: 'Online processing of images with essential formulas of vegetation indexes such as NDVI and EVI',
                link: '/vaneLanguage',
            },
            length: 3,
        };

        function renderSlide(params, slide){
            var layer = L.tileLayer(slide.url + slide.urlParams);
            console.log(slide.url + slide.urlParams);
            var map = L.map(slide.mapid, {zoomControl:false, attributionControl:false, center: slide.center, maxZoom: params.maxZoom, zoom : params.zoom, layers: [ layer ]});
            L.control.scale({position:'bottomleft',imperial:false, detectRetina: true,}).addTo(map);
            map.scrollWheelZoom.disable();
            map.dragging.disable();
            map.boxZoom.disable();
            map.doubleClickZoom.disable();
            // map.tap.disable();
            return [map, layer];
        }

        renderSlide(params, slides.slide1);
        renderSlide(params, slides.slide2);
        renderSlide(params, slides.slide3);

        var hiddenSlides = function(){
            for(var elem in slides) {
                if(slides[elem].hasOwnProperty('el')) {
                    slides[elem]['el'].style.zIndex = -1;
                }
            }
        }

        hiddenSlides = hiddenSlides.bind(this);

        var step = 1;
        var controlsID = ['slide0', 'slide1', 'slide2'];

        var slideProgress = function(id) {
            var slide = '';
            if (id) {
                controlsID.filter(function(element, index){
                    if(id === element) {
                        step = index;
                    }
                });
            }

            if(step >= slides.length){
                step = 0;
            }
            switch(controlsID[step]) {
                case 'slide0' :
                    slide = 'slide1';
                    break;
                case 'slide1':
                    slide = 'slide2';
                    break;
                case 'slide2' :
                    slide = 'slide3';
                    break;
            }

            hiddenSlides();
            slides[slide]['el'].style.zIndex = 1;
            mainSliderTitle.textContent = slides[slide]['title'];
            mainSliderDescription.textContent = slides[slide]['description'];
            mainSliderLink.href = slides[slide]['link'];

            var label = document.getElementById(controlsID[step++]).parentNode;
            var input = label.querySelector('.main-slider__radio');
            if (input) {
                input.checked = 'true';
            }
        };

        slideProgress = slideProgress.bind(this);

        controls.addEventListener('click', function(event){
            if (event.target.classList.contains('main-slider__label')) {
                var control = (event.target).querySelector('.main-slider__control');
                slideProgress(control.id);
            }
            if (event.target.classList.contains('main-slider__control')) {
                slideProgress(event.target.id);
            }
        });

        var interval = setInterval(slideProgress, 7000);
    }

    //Работа с меню навигации

    var mainNav = document.querySelector('.main-nav__items');
    var toggleNav = document.getElementById('toggle-nav');
    var flagMenuVane = false;
    var flagMenuMaps = false;
    var flagNavMenu = false;

    if (mainNav) {

        var getNav = function(){
            if(!flagNavMenu) {
                mainNav.classList.add('main-nav__items--enable');
            } else {
                mainNav.classList.remove('main-nav__items--enable');
            }
            flagNavMenu = !flagNavMenu;
        }

        getNav = getNav.bind(this);

        if(toggleNav) {
            toggleNav.addEventListener('click', getNav);
        }


        mainNav.addEventListener('click', function (event) {
            var node = event.target.parentNode;
            var element = document.getElementById(node.id);
            if(element) {
                var menuVane = element.querySelector('.main-nav__sub-items');
                if(node.id === 'menu-vane') {
                    if(!flagMenuVane) {
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
                    flagMenuVane = !flagMenuVane;
                }
                if(node.id === 'menu-maps') {
                    if(!flagMenuMaps) {
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
                    flagMenuMaps = !flagMenuMaps;
                }
            }
        });
    }

});