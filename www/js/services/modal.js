angular.module("salesman")
  .service("MyModal", function ($ionicModal, $timeout, $ionicPopup) {
    this.showAlert = function (title, template) {
      $ionicPopup.alert({
        title: title,
        template: template
      });
    };


    this.showLoading = function () {
      var loader = $ionicPopup.show({
        template: '' +
        '<div class="loader-box">' +
        '<ion-spinner class="loader" icon="bubbles"></ion-spinner>' +
        '</div>'
      });
      return loader;
    }


  });
