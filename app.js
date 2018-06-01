$(document).ready(function() {
  let snippets = { data: [] };

  $('.submitForm').on('click', function() {
    let textFieldValue = $('.textField').val();
    let textAreaValue = $('.textArea').val();
    
    if ($('.textField').val() === '' && $('.textArea').val() === '') {
      alert('Please enter a valid name, and fill out form!');
    } else if($('.textField').val() === '') {
      alert('Please enter a valid name!');
    } else if ($('.textArea').val() === '') {
      alert('Please fill out form!');
    }


    $('#test').html($('.textArea').val().replace(/\n/g, '<br>'));
    $('.debug').html($('.textArea').val().replace(/\n/g, '<br>'));
    


    snippets.data.push({[textFieldValue]: textAreaValue});
    console.log(snippets);

  // localStorage.setItem('myFormTextData', textFieldValue);  
  // $('.textField').val('');

  // localStorage.setItem('myFormTextAreaData', textAreaValue);  
  // $('.textArea').val('');
  
  localStorage.setItem('snippets', JSON.stringify(snippets));

  });
  
  $('.getData').on('click', function() {
    let retrieveSnippetName = localStorage.getItem('myFormTextData');
    let retrieveSnippetData = localStorage.getItem('myFormTextAreaData');
    $('.snippetContainer').text('retrieveSnippetName: ' + retrieveSnippetName + ' retrieveSnippetData: ' + retrieveSnippetData );
  });

  // this is old can be removed
  // $('.textField').on('keyup', function() {
  //   let textFieldValue = $('.textField').val();
  //   $('.debug').text(textFieldValue);
  // });

});

// stringify and parse json object
//snippetOne+++”this is the actual snippet”
// snippetOne+++”this is the actual snippet”—-snippetTwo+++”this is the other snippet”
// From Me to Everyone: (05:39 PM)
// Never seen triple operator before
// From john michelin to Everyone: (05:39 PM)
// - - -
// valueFromLocalStorage.split(‘- - -‘)
// storage.removeItem(keyName



// {
// data: []
// }
// From john michelin to Everyone: (05:45 PM)
// [{ snippetName: ‘’, snippetText: ‘’}, …. {}]


// tags: []
// [‘collection’, ‘es6’]