var app = angular.module('MyApp', [])
app.controller('MyController', function($scope, $http){

    $scope.UsersList = []
    $scope.data={}
    $scope.flag = 0
    
    $http.get('/api/users').then((res)=>{
        $scope.UsersList = res.data
    })

    $scope.checkUser = function(){
        $scope.flag = 1
    }
    $scope.add=(data)=>{
        $http.post(`/api/users`,$scope.data).then((response)=>{
            $scope.UsersList=response.data
            $scope.data={}
          
        })
    }
  
});