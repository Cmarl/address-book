'use strict';

angular.module('address')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('address', {url: '/address', templateUrl: '/views/address/address.html', abstract: true})
  .state('address.list', {url: '', templateUrl: '/views/address/address-list.html', controller: 'AddressListCtrl'})
  .state('address.new', {url: '/address', templateUrl: '/views/address/address-new.html', controller: 'AddressNewCtrl'})
  .state('address.show', {url: '/address', templateUrl: '/views/address/address-show.html', controller: 'AddressShowCtrl'});
});
