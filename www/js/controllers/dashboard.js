angular.module("salesman")
    .controller("Dashboard", function ($scope, $http, $stateParams) {

        var uId = $stateParams.uId;
        console.log($stateParams);
        $http.get("/users/" + uId).then(
            function (data) {
                console.log(data);
                $scope.user = data.data[0];
                console.log($scope.user);
            },
            function (err) {
                //console.log(data)
            })
    })
    .filter('capitalize', function () {
        return function (input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });