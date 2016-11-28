/**
* angular-starter-kit
*
* @author Andrea SonnY <andreasonny83@gmail.com>
* @copyright 2016 Andrea SonnY <andreasonny83@gmail.com>
*
* This code may only be used under the MIT style license.
*
* @license MIT  https://andreasonny.mit-license.org/@2016/
*/
(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactController', ContactController);

  function ContactController($mdToast) {
    var vm = this;
    vm.toast = $mdToast;

    $mdToast.show(
      $mdToast.simple()
        .textContent('Welcome to Angular Starter Kit!'));

    this._init();
  }

  /**
   * initialize the controller
   */
  ContactController.prototype._init = function() {
    this.pageReady = true;
  };

  ContactController.prototype.next = function(isValid) {
    var vm = this;
    // If the form is not validated, show an error message
    if (!isValid) {
      vm.toast.show(
        vm.toast.simple()
          .textContent('You must fill all the required information first.')
          .hideDelay(0));

      return;
    }

    vm.selectedIndex += 1;
  };

  ContactController.$inject = ['$mdToast'];
})();
