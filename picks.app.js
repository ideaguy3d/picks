angular.module('rsm-pick', [
    'ngMaterial', 'ngRoute', 'ngSanitize',
    'ngMessages', 'ngMdIcons', 'ngAnimate', 'mdDataTable'
]) // , "material.svgAssetsCache" // old dependencies
    .config(function ($mdThemingProvider, $mdIconProvider) {
        let redstoneRedMap = $mdThemingProvider.extendPalette('red', {
            '500': '#434343',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('redstoneRed', redstoneRedMap);
        $mdThemingProvider.theme('default').primaryPalette('redstoneRed');

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
        //.primaryPalette('grey')
        //.accentPalette('red')
        //.backgroundPalette('red')
        //.dark()
        ;

    })
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                // 1, ctrl: CoreCtrl
                .when('/', {
                    templateUrl: 'states/pick-tickets/view.pick-tickets.html'
                })
                // 2, ctrl: CreatePickCtrl
                .when('/create-pick', {
                    templateUrl: 'states/create-pick/view.create-pick.html',
                    controller: 'CreatePickCtrl',
                    controllerAs: 'cCreatePick'
                })
                // 3, ctrl: HomeCtrl
                .when('/home', {
                    templateUrl: 'states/home/view.home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'cHomeCtrl'
                });

            // $locationProvider.otherwise('/');
        }]
    );
