$(document).ready(function() {
  
  $('.submitForm').on('click', function() {
    let textFieldValue = $('.textField').val();
    let textAreaValue = $('.textArea').val();
    $('.debug').text('textFieldValue: '+  textFieldValue + ' textAreaValue: ' +  textAreaValue);

  localStorage.setItem('myFormTextData', textFieldValue);  
  $('.textField').val('');

  localStorage.setItem('myFormTextAreaData', textAreaValue);  
  $('.textArea').val('');
  });
  
  $('.getData').on('click', function() {
    let retrieveSnippetName = localStorage.getItem('myFormTextData');
    let retrieveSnippetData = localStorage.getItem('myFormTextAreaData');
    $('.debug').text('retrieveSnippetName: ' + retrieveSnippetName + ' retrieveSnippetData: ' + retrieveSnippetData );
  });

  // this is old can be removed
  // $('.textField').on('keyup', function() {
  //   let textFieldValue = $('.textField').val();
  //   $('.debug').text(textFieldValue);
  // });

});