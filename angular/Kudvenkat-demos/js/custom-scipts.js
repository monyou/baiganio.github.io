/**
 * Created by Lyuben Kikov on 27-Jan-17.
 */

let myApp = angular.module("myModule", []);

let myController = function ($scope) {
    $scope.message = "just message";
}

myApp.controller("myController", myController);


/* Easy way*/
// myApp.controller("myController", function ($scope) {
//     $scope.message = "just message";
// });
/* ------------------------------------------------------------ */
/*Complex objects demo*/

// let objDemo = angular.module('complexObj', []);
//
// objDemo.controller('objController', function ($scope) {
//     let employee = {
//       firstName: "Bugs",
//         lastName:"Bunny",
//         gender:"Rabbit"
//     };
//
//     $scope.employee = employee;
// });



/* Much Cool way*/
let objDemo = angular
    .module('complexObj', [])
    .controller('objController', function ($scope) {
        let employee = {
            firstName: "Bugs",
            lastName:"Bunny",
            gender:"Rabbit"
        };

        $scope.employee = employee;
    });

