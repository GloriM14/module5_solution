(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// 'item' is injected through state's resolve
ItemController.$inject = ['items']
function ItemController(items) {
  var itemlist = this;
    itemlist.items = items;

}

})();
