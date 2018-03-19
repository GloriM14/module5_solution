(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// 'item' is injected through state's resolve
ItemController.$inject = ['items','items2']
function ItemController(items,items2) {
  var itemlist = this;
    itemlist.items = items;
    itemlist.items2 = items2;
}

})();
