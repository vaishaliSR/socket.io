var app = angular.module('main-app', ['ui.router']);

// app config
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
  //ROOT
	$urlRouterProvider.otherwise("/");

	// states
 $stateProvider
        // home state / page
      .state('home',{
        url: '/',
    views: {  
    'header': {
        templateUrl: 'header.html'
      },                           
      'middle': {
        templateUrl: 'chats.html'
      }
    }
  })
       // cart state / page
      .state('cart',{
        url: '/cart',
    views: {  
    'header': {
        templateUrl: 'header.html'
      },  
    'middle': {
        templateUrl: 'users.html'
      }
    }
  })
}]);

/*   =========================================================================================== 
     *************************************** FACTORY ******************************************* 
     =========================================================================================== */


app.factory('home_json', function($http, $state){
  var data = {};
    var selectedId = [];
 data.arr = function(y){
  return selectedId;
 }
  // GETTING DATA
  data.getData = function(){
    return $http.get('http://staging.discernliving.com/discern/product/products?page=0&field_product_categories_tid[]=2265&sort_by=commerce_price_amount&sort_order=ASC');
}
  // posting data
data.postData = function(data) {
            return $http({
                method: "POST",
                url: " http://staging.discernliving.com/discern/product/products?page=0&field_product_categories_tid[]=2265&sort_by=commerce_price_amount&sort_order=ASC",
                data: data
            });
        };
  return data;
   return selectedId;
});

/*   =========================================================================================== 
     ********************************** HOME CONTROLLER **************************************** 
     =========================================================================================== */

app.controller('homeCtrl', function($scope, home_json){
     $scope.info = {};
      var x = home_json.arr().length;


      home_json.getData()
        .then(function success(response){
               $scope.info = response.data;
        }, function error(response){
           console.log(response);
        });

        // function to increase the number 
        $scope.addToCart = function(index){
         x = home_json.arr().length;
            //x++;
            document.getElementById('update').innerHTML = x+1;
            home_json.arr().push(this.x);
            console.log(home_json.arr());

        }
          document.getElementById('update').innerHTML = x;
});

/*   =========================================================================================== 
     ********************************** CART CONTROLLER **************************************** 
     =========================================================================================== */

app.controller('cartCtrl', function($scope, home_json){
   $scope.product = {};
   $scope.cartProduct = home_json.arr();
   var inputValue = 0;
   var subTotal = 0;
   var total = 0;
   var y = 0;
   var replace = 0;
  
   home_json.getData()
        .then(function success(response){
               $scope.product = response.data;
              // console.log(home_json.arr());
              var shipping =  document.getElementById('shipping');
              var text = shipping.textContent;
              replace =  parseInt(text.replace(/^\D+|\D.*$/g, ""));
              // console.log(replace);

                   for(var i=0; i<$scope.cartProduct.length; i++){
                    var mrp_p = parseInt($scope.cartProduct[i].mrp);
                     y += mrp_p;
                   }

                total = y+replace;
                document.getElementById('total').innerHTML =total;
                document.getElementById('subtotal').innerHTML =y;
        }, 
        function error(response){
           console.log(response);
        });
      
      // INCREASING PRODUCT QUANTITY
        $scope.addValue = function(data) {
            var value = document.getElementsByClassName("qty")[data].value;
         // inputValue[data] == inputValue.push(value);

          if(value >= 2){
               inputValue = value* this.x.mrp;
               document.getElementsByClassName('totalPrice')[data].innerHTML = inputValue;
              // console.log(inputValue);

               for(var i=0; i<$scope.cartProduct.length; i++){
                   subTotal += inputValue;
                   total = subTotal+replace;
                }

                  document.getElementById('subtotal').innerHTML =subTotal;
                  document.getElementById('total').innerHTML =total;
                  console.log(subTotal);
          }
        }

      // DELETE THE PRODUCT
       $scope.deleteProduct = function(product){
         var index = $scope.cartProduct.indexOf(product);
        $scope.cartProduct.splice(index, 1);
          subTotal = total - parseInt(product.mrp);
          total =  total - parseInt(product.mrp);
          document.getElementById('subtotal').innerHTML =subTotal;
          document.getElementById('total').innerHTML =total;

          if ($scope.cartProduct.length === 0) {
            subTotal = 0;
            total = 0;
            document.getElementById('subtotal').innerHTML =subTotal;
            document.getElementById('total').innerHTML =total;
          }
        // console.log();
       }
});


/*   =========================================================================================== 
     *************************************** FILTER ******************************************** 
     =========================================================================================== */

 app.filter('strLimit', ['$filter', function($filter) {
   return function(input, limit) {
      if (! input) return;
      if (input.length <= limit) {
          return input;
      }

      return $filter('limitTo')(input, limit) + '..';
   };
}]);

