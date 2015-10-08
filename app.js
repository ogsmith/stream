(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('https://raw.githubusercontent.com/ogsmith/Data/master/store-products.json').success(function(data){
        store.products = data;
    });
  }]);
app.controller('secondCollect', ['$http', function($http){
    var second = this;
    second.data = [];
    $http.get('https://raw.githubusercontent.com/ogsmith/Data/master/data2.json').success(function(data){
        second.data = data;
    });
  }]);
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
