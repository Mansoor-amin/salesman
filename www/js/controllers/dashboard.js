angular.module("salesman")
  .controller("Dashboard", function ($scope,MyModal, $http, $stateParams,$timeout,$ionicModal,$state) {
    var uId = $stateParams.uId;
    $http.get("/users/" + uId).then(
      function (data) {
        $scope.user = data.data[0];
      },
      function (err) {
        //console.log(data)
      });
    $scope.doLogOut = function () {
      var loader = MyModal.showLoading();
      $timeout(function () {
        loader.close();
        $state.go("login")
      }, 1000)
    }
  })
  .filter('capitalize', function () {
    return function (input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
  });
