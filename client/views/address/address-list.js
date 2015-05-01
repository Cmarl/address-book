'use strict';

angular.module('address')
.controller('AddressListCtrl', function($scope, $state, Contact){
  var afBook = Contact.getBook();
  afBook.$watch(function(event) {
    Contact.syncContact(event.key());
  });
});
