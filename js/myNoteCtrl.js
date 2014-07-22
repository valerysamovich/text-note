// The controller file "myNoteCtrl.js"
app.controller("myNoteCtrl", function($scope) {

  // name of the message
  $scope.message = "";

  // length of the message
  $scope.left = function() {
    return 100 - $scope.message.length;
  };

  // clear the message
  $scope.clear = function() {
    $scope.message = "";
  };

  // save the message
  $scope.save = function() {
    $scope.message = ""; 
  };
});
