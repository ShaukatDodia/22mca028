var usermodel = angular.module('userApp', []);
usermodel.controller('userCtrl', function ($scope, $http) {
    $scope.userData = []
    $scope.newuserData = {}
   
    $scope.getUserData = function () {
        $http.get('/api/getUserData').then((response) => {
            $scope.userData = response.data;
        });
    }

    $scope.addUser = function () {
       $http.post('/api/addUser',$scope.newuserData).then((response)=>{
        $scope.userData.push(response.data)
        $scope.newuserData={}
       })
    }

    $scope.updateItem = function (item) {
        $scope.edit = true
        $scope.updatedItem = item

     }  
     
     $scope.editItem = function (up) {
        $http.put(`/api/update/${up.userID}`, up).then((response) => {
            $scope.items = response.data
        })
        $scope.getUserData()
    }

    $scope.deleteItem = function (item) {
        $http.delete(`/api/delete/${item}`).then((response)=>{
         $scope.items=response.data
         $scope.getUserData()
        })
     }    

    $scope.getUserData();
});