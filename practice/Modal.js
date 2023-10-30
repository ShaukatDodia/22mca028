
const app=angular.module("myApp",[])
app.controller("myCTRL",($scope,$http)=>{
    $scope.list=[]
    $scope.data={}
    $scope.upda = {}
  
$scope.getData=()=>{
    $http.get(`/api/tablet`).then((response)=>{
        $scope.list=response.data;
    })
}
$scope.delete=(i)=>{
    $http.delete(`/api/tablet/${i.tabletId}`).then((response)=>{
        $scope.list = response.data;
        $scope.getData()
    })
}

$scope.update = (item) =>{
    $scope.temp = 1;
    $scope.upda = {
        "tabletId": item.tabletId,
        "Tname": item.Tname,
        "Tbrand": item.Tbrand,
        "Tprice": item.Tprice,
        "Tprocessor": item.Tprocessor,
        "Tstorage": item.Tstorage,
        "Timage": item.Timage,
        "Tquantity": item.Tquantity
    }
}

$scope.updateData = () =>{
    $http.put("/api/tablet", $scope.upda).then((res)=>{
        $scope.list = res.data;
        $scope.getData();
        $scope.temp = 0;
    })
}

$scope.add=(data)=>{
    $http.post(`/api/tablet`,$scope.data).then((response)=>{
        $scope.list=response.data
        $scope.data={}
        $scope.getData()
    })
}
$scope.getData()
})