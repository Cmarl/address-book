'use strict';

angular.module('address')
.controller('AddressNewCtrl', function($scope, $state, Contact){
  
  $scope.newContact = function(contact){
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      contact.photo = reader.result;
      Contact.new(contact);
      $('#photo').val('');
      clearForm();
    };
    if (file) { reader.readAsDataURL(file);}
    else { preview.src = '';}
  };

  function clearForm(){
    $scope.contact = {};
  }

});
