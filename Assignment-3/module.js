const app = angular.module("myApp",[])

app.controller("myCTRL",function($scope,$http){
    $scope.list = []
    $scope.getData = function(){
            console.log("hello world");
            $http.get('/api/getData').then((response)=>{
                $scope.list = response.data
            })
        }
        $scope.getData()

        $scope.insertData = function(){
            $http.get('/api/addData').then((response)=>{
                $scope.list = response.data
            })
        }

        $scope.deleteRecord = function(id){
            $http.delete('/api/delete/'.id).then((response)=>{
                $scope.list = response.data
            })
        }
})