$(document).ready(function() {
  
  $('.submitForm').on('click', function() {
    let textFieldValue = $('.textField').val();
    $('.debug').text(textFieldValue);

  localStorage.setItem('myFormTextData', textFieldValue);  
  $('.textField').val('');
  });
  
  $('.getData').on('click', function() {
    let retrieveData = localStorage.getItem('myFormTextData');
    $('.debug').text(retrieveData);
  });

  // this is old can be removed
  // $('.textField').on('keyup', function() {
  //   let textFieldValue = $('.textField').val();
  //   $('.debug').text(textFieldValue);
  // });

});