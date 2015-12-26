/**
 * Created by lcc on 15/12/26.
 */
var myMod=angular.module('myMod',[]);
myMod.value('modMsg','hello from my 小城');
myMod.controller('controllerB',['$scope','modMsg',function($scope,msg){
    $scope.message=msg;
}]);

var myApp=angular.module('myApp',['myMod']);
myApp.value('appMsg','hello from my 小美');
myApp.controller('controllerA',['$scope','appMsg',function($scope,msg){
    $scope.message=msg;
}]);