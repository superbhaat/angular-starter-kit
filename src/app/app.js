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
    .module('app', [
      'ui.router',
      'ngAnimate',
      'ngMaterial'
    ])
    .config(config)
    .run(run);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$stateProvider', '$locationProvider'];
  // run.$inject = [];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($stateProvider, $locationProvider) {
    // routes
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
      })
      .state('contatus', {
          url: '/contact-us',
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController',
          controllerAs: 'contactCtrl'
      })
      .state("404", {
          url: "*path",
          templateUrl: "404.html",
          redirectTo:'/404'
      });

      /*.otherwise({
        redirectTo: '/404'
      });*/

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  /**
   * Run once the App is ready
   */
  function run() {
    // console.log('App ready!');
  }
})();
