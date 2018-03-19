(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

/*MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}*/
function SignUpController() {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };

  reg.test()=function(){
    console.log("hi");
  }
}

})();
