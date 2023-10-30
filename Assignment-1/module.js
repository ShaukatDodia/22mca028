const app = angular.module("myApp",[])


//FIRST 
const key = {"userId": "Admin","Password": "Admin"}
function check(){var name = document.getElementById("uname").value;var password = document.getElementById("password").value;if(name===key.userId && password===key.Password){alert("Authenticated User"); document.getElementById("uname").value = ""; document.getElementById("password").value = "";}else{alert("Wrong Credentials"); document.getElementById("uname").value = ""; document.getElementById("password").value = "";}}


//SECOND
app.controller("myCTRL",function($scope){
    $scope.user = [
        {"userId":"22MCA138", "name":"Aamir", "city":"Vadodara"},
        {"userId":"MS0024A130", "name":"Fatima", "city":"Delhi"},
    ]
    $scope.insert = ()=> {
            $scope.user.push(
                {"userId": document.getElementById("id").value, "name": document.getElementById("name").value, "city": document.getElementById("city").value, }
            )
    }
    $scope.delete = (id)=> {
        $scope.user.pop()
    }
    $scope.update = (id)=>{
        const index = $scope.user.findIndex(e=>e.userId == id)
        index.name = document.getElementById("uname").value;
        index.city = document.getElementById("ucity").value;
    }
})

//FORTH
app.controller("my2CTRL",function($scope){
    $scope.n1 = 0;
    $scope.n2 = 0;
    $scope.result = 0;

    $scope.add = function() {
        $scope.result = Number($scope.n1) + Number($scope.n2);
    };

    $scope.sub = function() {
        $scope.result = Number($scope.n1) - Number($scope.n2);
    };

    $scope.mul = function() {
        $scope.result = Number($scope.n1) * Number($scope.n2);
    };

    $scope.div = function() {
            $scope.result = Number($scope.n1) / Number($scope.n2);
    };
})

//FIFTH
app.controller("my5CTRL",function($scope){})

//SIXTH
app.controller("my6CTRL",function($scope){
    $scope.user = [
        {"pId":"1", "name":"AC", "price":1000},
        {"pId":"2", "name":"Fridge", "price":5000},
    ]
    $scope.qty = 0;
})

//SEVENTH
app.controller("my7CTRL",function($scope){
    $scope.subject = [
        {"sub":"Maths"},
        {"sub":"English"},
        {"sub":"Science"},
        {"sub":"Social Science"},
        {"sub":"Data Structure and Algorithms"},
        {"sub":"Data Science"},
    ]
    $scope.qty = 0;
})

//EIGHT
app.controller('my8CTRL', function($scope) {
    $scope.amount = 1;
    $scope.fromCurrency = 'USD';
    $scope.toCurrency = 'EUR';

    var exchangeRates = {
      'USD': 1.0,
      'EUR': 0.85,
      'GBP': 0.73,
    };

    $scope.convertCurrency = function() {
      var rate = exchangeRates[$scope.fromCurrency] / exchangeRates[$scope.toCurrency];
      $scope.convertedAmount = $scope.amount * rate;
    };
  });

  //NINE
  app.controller('my9CTRL', function($scope) {
    $scope.message = "Hello My Name is Amiruddin Samlayawala! Have a Greate Day MCA!!!";
    
  });

  //Tenth
  app.controller("my10CTRL",function($scope){
    $scope.StudInfo = [
        {SID: 138, SNAME: "Amir", AGE: 23, s1: 90, s2: 80, s3: 80},
        {SID: 75, SNAME: "Devansh", AGE: 22, s1: 60, s2: 50, s3: 80},
        {SID: 76, SNAME: "Ketab", AGE: 52, s1: 90, s2: 40, s3: 78},
        {SID: 83, SNAME: "Abhilasha", AGE: 22, s1: 70, s2: 50, s3: 90},
        {SID: 142, SNAME: "Nidhi", AGE: 25, s1: 60, s2: 55, s3: 60},
        {SID: 177, SNAME: "Hatim", AGE: 22, s1: 60, s2: 30, s3: 60},
    ]

    $scope.dispResult = function(a){
        //function code
        $scope.S1 = a.s1
        $scope.S2 = a.s2
        $scope.S3 = a.s3
        if(a.s1<50 || a.s2<50 || a.s3<50){
            $scope.total = "Fail";
        }
        else{
            $scope.total = a.s1 + a.s2 + a.s3;
        }
        $scope.grade1 = calculateGrade(a.s1)
        $scope.grade2 = calculateGrade(a.s2)
        $scope.grade3 = calculateGrade(a.s3)  

        $scope.perc = $scope.total/3.0;

        function calculateGrade(marks){
            if(marks>80){
                return "AA";
            }else if(marks>75 && marks<=80){
                return "AB";
            }else if(marks>70 && marks<=75){
                return "BB";
            }else if(marks>65 && marks<=70){
                return "BC";
            }else if(marks>60 && marks<=65){
                return "CC";
            }else if(marks>55 && marks<=60){
                return "CD";
            }else if(marks=>50 && marks<=55){
                return "DD";
            }else{
                return "FF";
            }
        }
    }
})

//ELEVENTH
app.controller("my11CTRL",function($scope){

    $scope.list = [
        {pID: "1",pName:"Car",pCategory:"Vehicle",pDesc:"This is a Car",mDate:"22-01-2020",price:100000,pImage:"C:\Users\Sys\Desktop\Doctor Appointment\Temp\1.jpeg"},
        {pID: "2",pName:"Bike",pCategory:"Vehicle",pDesc:"This is a Bike",mDate:"02-11-2021",price:80000,pImage:"C:\Users\Sys\Desktop\Doctor Appointment\Temp\2.jpeg"},
        {pID: "3",pName:"Fridge",pCategory:"Home Appliances",pDesc:"This is a Fridge",mDate:"02-11-2021",price:65000,pImage:"C:\Users\Sys\Desktop\Doctor Appointment\Temp\3.jpeg"},
        {pID: "4",pName:"RCB Bus",pCategory:"Vehicle",pDesc:"This is a Emotions",mDate:"02-11-2021",price:7000,pImage:"C:\Users\Sys\Desktop\Doctor Appointment\Temp\4.jpeg"},
    ] 

    $scope.orders = [

    ]

    $scope.status = 0;
    $scope.qty=1;
    $scope.changeStatus = function(item){
        var btn = document.querySelector("#mybtn");
        if($scope.status==0){
            btn.value="Close"
            $scope.status=1;
            btn.style.backgroundColor="red";
            $scope.cat = item.pCategory
            $scope.desc = item.pDesc
            $scope.pr = item.price
        }
        else{
            $scope.status=0;
            btn.value = "View Details";
            btn.style.backgroundColor="green";
        }
    }
    $scope.tId = 1;
    $scope.tot = 0;
    $scope.placeNow = function(item){
        $data = {
            "tId": $scope.tId,
            "cName": item.pName,
            "cPrice": item.price,
            "cQty" : 1
        }
        $scope.tId++;
        $scope.orders.push($data)
    }
})

