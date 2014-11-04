/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(routesConfig);
app.controller("navController", ['$scope', '$location', navController]);

function navController($scope, $location) {
    $scope.isActive = function (route) {
        //console.log($location.path());
        return route === $location.path();
    }
}


function routesConfig($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })

            // route for the about page
            .when('/page1', {
                templateUrl: 'pages/page1.html',
                controller: 'page1Controller'
            })

            // route for the contact page
            .when('/page2', {
                templateUrl: 'pages/page2.html',
                controller: 'page2Controller'
            });
}


function mainController($scope) {
    $scope.message = "Home"
}

function page1Controller($scope) {
    $scope.message = "Page 1"
}

function page2Controller($scope) {
    $scope.message = "Page 2"
}
