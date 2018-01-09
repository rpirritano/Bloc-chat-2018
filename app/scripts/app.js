(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: '/templates/home.html'
            });
    }
    angular
        .module('Chat-With-Me', ['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
        .config(config);
}());
