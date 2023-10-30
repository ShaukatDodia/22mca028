var app = angular.module('loginApp', [])
app.controller('loginCtrl', function ($scope) {
    $scope.userList = [
        { userID: 'User1', pwd: 'user1' },
        { userID: 'User2', pwd: 'user1' },
        { userID: 'User3', pwd: 'user1' },
        { userID: 'User4', pwd: 'user1' },
    ]
    //product List
    $scope.productList = [
        { pID: 'P001', pName: 'Laptop', price: '87000', pImage: 'laptop.jpg' },
        { pID: 'P002', pName: 'AC', price: '40000', pImage: 'Ac.jpg' },
        { pID: 'P003', pName: 'Washing Machine', price: '50000', pImage: 'machine.jpg' },
        { pID: 'P004', pName: 'Microwave', price: '3000', pImage: 'micro.jpg' },
        { pID: 'P005', pName: 'TV', price: '60000', pImage: 'tv.jpg' },
        { pID: 'P006', pName: 'Mobile', price: '45000', pImage: 'mobile.jpg' },
    ]
    //Authenticate Function
    $scope.stat
    $scope.authenticate = function (id, pass) {

        for (i in $scope.userList) {
            if ($scope.userList[i].userID == id && $scope.userList[i].pwd == pass) {
                $scope.stat = 1
                break;
            }
            else {
                $scope.stat = 0
            }

        }
    }

    //Add to cart
    $scope.cart = []
    $scope.addToCart = function (i, q) {
        i.qty = q
        $scope.cart.push(i)
        $scope.grandTotal(i)
    }
    //grand Total
    $scope.total = 0;
    $scope.grandTotal = function (obj) {
        $scope.total += obj.price * obj.qty
    }
})
