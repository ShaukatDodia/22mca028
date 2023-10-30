const app = angular.module("myApp2",[])

app.controller("myCTRL",function($scope,$http){
    $scope.list = []
    $scope.getData = function(){
            console.log("hello world");
            $http.get('/api/getData').then((response)=>{
                $scope.list = response.data
            })
        }
        $scope.getData()
})