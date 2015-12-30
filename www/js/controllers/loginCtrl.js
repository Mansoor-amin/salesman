angular.module("salesman")
  .controller("LoginCtrl", function (MyModal, $http, $scope, $timeout, $location, $ionicModal) {
    $scope.loginNow = function () {
      var obj = {
        userName: $scope.user.userName.toLowerCase(),
        password: $scope.user.password.toLowerCase()
      };
      var loader = MyModal.showLoading();
      $http.post("/account/login", obj)
        .then(
          function (data) {
            var user = data.data[0];
            if (!user) {
              loader.close();
              MyModal.showAlert('Logging Failed!', "Invalid user name or password!");
            }
            else {
              $timeout(function () {
                loader.close();
                $location.path("/dashboard/" + user._id);
                MyModal.showAlert("Logging Successful", "Welcome " +
                  user.firstName.charAt(0).toUpperCase() +
                  user.firstName.slice(1) + " " +
                  user.lastName.charAt(0).toUpperCase() +
                  user.lastName.slice(1));
              }, 0);


            }
          },
          function (err) {
            console.log(err);
          });
    }
  });
