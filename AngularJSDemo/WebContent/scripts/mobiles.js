var app=angular.module(myapp,[]);
function MobileController($scope){
	$scope.mobiles=[{name:'lenovo',model:'Vibe',price:23455},
	{name:'samsung',model:'J5',price:43342},
	{name:'samsung',model:'J7',price:645445},
	{name:'lenovo',model:'P1',price:434645}]
}
app.controller('mobileController',MobileController);