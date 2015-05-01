
'use strict';

angular.module('address')
.factory('Contact', function($rootScope, $firebaseArray, $firebaseObject){

  function Contact(){
  }

  Contact.new = function(contact){
    var tempContact = angular.copy(contact);
    tempContact.birthday = contact.birthday.getTime();
    var fbBook = $rootScope.fbUser.child('AddressBook/');
    var afBook = $firebaseArray(fbBook);
    afBook.$add(tempContact).then(function(ref){
      var localContact = $firebaseObject(ref);
      $rootScope.contactInfo.push = localContact;
    });
  };

  Contact.getBook = function(){
    return $firebaseArray($rootScope.fbUser.child('AddressBook/'));
  };

  Contact.syncContact = function(key){
    var fbBook = $rootScope.fbUser.child('AddressBook/');
    var fbContact = fbBook.child(key);
    var afContact = $firebaseObject(fbContact);
    //var varName = 'contactInfo.' + key;
    afContact.$bindTo($rootScope.contactInfo, key);
  };

  return Contact;
});
