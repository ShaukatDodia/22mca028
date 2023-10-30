var app = angular.module("myApp",[])
app.controller("myCTRL", function($scope, $http){
    $scope.list=[]
    $scope.newData = {}
    $scope.temp=0;
    $scope.order = "Ascending";
    $scope.upda = {}


    $scope.getData = () =>{
        $http.get("/api/get").then((res)=>{
            $scope.list = res.data;
        })
    }

    $scope.addData = () =>{
        $http.post("/api/post",$scope.newData).then((res)=>{
            $scope.list = res.data;
            $scope.getData();
            $scope.newData = {}
        })
    }

    $scope.delete = (item) =>{
        $http.delete(`/api/delete/${item.proID}`).then((res)=>{
            $scope.list = res.data;
            $scope.getData();
        })
    }

    $scope.update = (item) =>{
        $scope.temp = 1;
        $scope.upda = {
            "proID": item.proID,
            "proName": item.proName,
            "price": item.price,
            "qty": item.qty
        }
    }

    $scope.updateData = () =>{
        $http.put("/api/put", $scope.upda).then((res)=>{
            $scope.list = res.data;
            $scope.getData();
            $scope.temp = 0;
        })
    }

    $scope.getData();
})