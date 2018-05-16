
var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl:"./pages/tab1.html",
            controller:"tab1Controller"
        })
        .when("/tab2",{
            templateUrl:"./pages/tab2.html",
            controller:"tab2Controller"
        })
        .when("/tab3",{
            templateUrl:"./pages/tab3.html",
            controller:"tab3Controller"
        });

});


 myApp.controller('tab1Controller', function($scope) {
    $scope.choicess=[{name:"Show All"},{name:"Photos"},{name:"Videos"},{name:"Texts"}];
    $scope.selectedchoice = {name:"Show All"};
    var allFileNames=["a.jpg","b.jpg","c.txt","d.txt","e.mp4","f.mp4"];
    $scope.filenames = allFileNames;

    $scope.filterValues=function(){
        var temp=allFileNames;
        switch ($scope.selectedchoice.name) {
            case "Show All":
                $scope.filenames = temp;
                break;

            case "Photos":
                $scope.filenames=[];
                temp.forEach(function(item){
                   if(item.includes(".jpg")){
                       $scope.filenames.push(item);
                   }
                });
                break;

            case "Videos":
                $scope.filenames=[];
                temp.forEach(function(item){
                    if(item.includes(".mp4")){
                        $scope.filenames.push(item);
                    }
                });
                break;
            case "Texts":
                $scope.filenames=[];
                temp.forEach(function(item){
                    if(item.includes(".txt")){
                        $scope.filenames.push(item);
                    }
                });
                break;
            default:
                $scope.filenames = temp;
                break;
        };
    };

});


myApp.controller('tab2Controller',function($scope){

    $scope.imglist = ["a1.png","a2.png","a3.jpg","a4.jpg","a5.jpg"];

    $scope.mychoice=function(src){
        document.getElementById("myImg").src = `./assets/${src}`;
    }

});


myApp.controller('tab3Controller', function($scope) {
    $scope.todoList = [{todoText:'Clean House', done:false}];
    $scope.todoAdd=function(){
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    }


    $scope.remove = function() {
        var oldList = $scope.todoList;
        console.log("oldList" + oldList);
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            console.log("forEach loop " + x.todoText);
            if (!x.done) $scope.todoList.push(x);
        });
    };
});