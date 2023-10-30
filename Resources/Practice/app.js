var app = angular.module('MyApp', [])
app.controller('MyController', function($scope, $http){

    $scope.UsersList = []
    $scope.newuserData={}
    $scope.flag = 0

    
    $http.get('/api/users').then((res)=>{
        $scope.UsersList = res.data
     });
    

    $scope.addUser = () => {
        $http.post('/api/addUser', $scope.newuserData).then((response) => {
            $scope.UsersList.push(response.data)
            $scope.newuserData = {}
        })
    }

    $scope.updateItem = function (item) {
        $scope.edit = true
        $scope.updatedItem = item

     }  
     
     $scope.editItem = function (up) {
        $http.put(`/api/update/${up.EmpID}`, up).then((response) => {
            $scope.items = response.data
        })
        
    }

    $scope.checkUser = function(){
        $scope.flag = 1
    }
});