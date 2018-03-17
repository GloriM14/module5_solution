(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  //mainList.items = items;
  var reg = this;



reg.submit = function () {

reg.items2=MenuDataService.getMatchedMenuItems(reg.user.short_name);
if(reg.items2){
MenuDataService.adddata(reg.user.firstname,reg.user.lastname,reg.user.email,reg.user.phone,reg.user.short_name);
}
};
}

})();
