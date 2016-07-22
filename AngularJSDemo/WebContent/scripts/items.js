var app=angular.module(myapp,[]);
function EmpController($scope){
$scope.employees=[{name:'Rama Krishna',city:'Bangalore',salary:234455},
{name:'Rama',city:'Chennai',salary:230000},
{name:'Rama',city:'Chennai',salary:560000},
{name:'Roy',city:'Chennai',salary:6788888},
{name:'Parantap',city:'Bangalore',salary:7647646},
{name:'Jay',city:'Hyderabad',salary:7555558}];	
}
app.controller('empController',EmpController);
