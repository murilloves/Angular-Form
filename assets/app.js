var app = angular.module('app', ['ngMask']);

app.controller('submit', ['$scope','$http',function($scope,$http)]){

	console.log('Somente números no CNPJ!');
	$scope.cnpj = "";

}]);