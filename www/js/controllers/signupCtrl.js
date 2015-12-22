angular.module("salesman")
  .controller("SignUpCtrl", function (MyModal,$scope, $http, $timeout, $location) {
    $scope.addUser = function () {

      if ($scope.user.password == $scope.user.ConfirmPassword) {
        var obj = {
          firstName: $scope.user.firstName.toLowerCase(),
          lastName: $scope.user.lastName.toLowerCase(),
          userName: $scope.user.userName.toLowerCase(),
          password: $scope.user.password.toLowerCase()
        };
        $http.post("/account/signup", obj)
          .then(
            function (success) {
              console.log(success);
              if (success.data.message) {
                MyModal.showAlert("SignUp failed!","Email is already exists!")
              }
              else {
                var loader = MyModal.showLoading();
                $timeout(function () {
                  loader.close();
                  $location.path("/dashboard/" + success.data._id);
                  MyModal.showAlert("Welcome","Account successfully created!")
                }, 1500);
              }
            },
            function (err) {
              console.log(err);
            });
      }
      else {
        $scope.user.password = "";
        $scope.user.ConfirmPassword = "";
        MyModal.showAlert("SignUp failed!","These passwords don't match. Try again?");
      }


    }
  });
