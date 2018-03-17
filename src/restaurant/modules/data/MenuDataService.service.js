(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  /*var service = this;
  var item = [];

  var items = [];
  var items2=[];


  service.getItems = function (d) {
if(d==0){
  service.getMatchedMenuItems ()
      var deferred = $q.defer();
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 800);
}  else{
  service.getItemsForCategory(d)
      var deferred = $q.defer();
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items2);
      }, 800);
}


    return deferred.promise;
  };
service.testputa=function(){
  console.log("Dios esta conmigo")
}
  service.getMatchedMenuItems =function (){

    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    promise.then(function (response) {
    items= response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })

return items
  }
  service.getitems2 =function (){
      var items2 = [];
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
    return response
  }
  service.getItemsForCategory=function (d) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params : {
        category: d
      }
    });
    promise.then(function (response) {

    items2= response.data.menu_items;

    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })
  }*/

  var item = [];
    var item1 = [];
    var items = [];
  var service = this;
  var items2 = [];
  service.getMatchedMenuItems =function (word){
   service.removeItemtotal();
    var promise = service.getitems2();
    promise.then(function (response) {
    service.items = response.data.menu_items;

      for(var i=0;i<service.items.length;i++) {
        if(service.items[i].short_name.toLowerCase()==word.toLowerCase()){
          item=service.items[i];
            items2.push(item);
            item="";
        }
       }


    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })

return items2


  }
  service.adddata= function(firstname,lastname,email,phone,fav){
    item1={
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      favoitem: fav
    };
    items.push(item1);
    item1="";

  }
  service.getitemdetail= function(){
 console.log("hI");
    return items
  }
  service.removeItemtotal = function () {

items.splice(0,items2.length);
};
  service.checkinclude= function(str, word){
    var result = str.includes(word);
    return result
  };
  service.removeItemtotal = function () {

  items.splice(0,items.length);
};
  service.removeItem = function (itemIndex) {
  items.splice(itemIndex, 1);
};
  service.getitems2 =function (){
      var items2 = [];
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });
    return response
  }

}

})();
