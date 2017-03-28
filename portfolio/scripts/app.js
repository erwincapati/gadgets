var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "routes/main.htm",
        controller : "mainCtrl"
    })
    .when("/laptopPage", {
        templateUrl : "routes/laptop.htm",
        controller : "laptopCtrl"
    })
    .when("/phonePage", {
        templateUrl : "routes/phone.htm",
        controller : "phoneCtrl"
    })
    .when("/tabletPage", {
        templateUrl : "routes/tablet.htm",
        controller : "tabletCtrl"
    });
});

app.controller('mainCtrl', function($scope, $http){
	$scope.message = "main";
    $http.get('jsonFiles/main.json').success(function(response){
        $scope.laptops = response.recordsInMain;
    }).error(function(response){
        console.log("main may mali");
    });
});

app.controller('laptopCtrl', function($scope, $http){
	$http.get('jsonFiles/laptops.json').success(function(response){
		$scope.laptops = response.recordsInLaptops;
	}).error(function(response){
		console.log("laptop may mali");
	});
});

app.controller('phoneCtrl', function($scope, $http){
	$http.get('jsonFiles/phones.json').success(function(response){
		$scope.phones = response.recordsInPhones;
	}).error(function(response){
		console.log("phone may mali");
	});
});

app.controller('tabletCtrl', function($scope, $http){
	$scope.message = "tablets";

	$http.get('jsonFiles/tablets.json').success(function(response){
		$scope.tablets = response.recordsInTablets;
	}).error(function(response){
		console.log("tablet may mali");
	});
});

app.filter('conditionss', function() {
    return function(input, uppercase) {
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if(input[i].id >= 0){
                out.push(input[i]);
            }
        }
        return out;
    }
});