angular.module("friendsList")
.controller("mainCtrl",function($scope){
$scope.text="I did it ";
$scope.friends=['Bob','Samantha','Brennon'];
$scope.addNewFriend= function(newFriend){
    $scope.friends.push(newFriend);
    $scope.newFriend = '';
}
});