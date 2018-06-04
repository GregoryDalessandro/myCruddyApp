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
    } else if (snippets.data.length === 0) {
      snippets.data.push({[textFieldValue]: textAreaValue});
      localStorage.setItem('snippets', JSON.stringify(snippets));    
    } else {
      snippets.data.forEach(function(snippet) {
        if (JSON.stringify(snippet) === JSON.stringify({[textFieldValue]: textAreaValue})) {
          alert('You have already saved!');
        } else {
          snippets.data.push({[textFieldValue]: textAreaValue});
          localStorage.setItem('snippets', JSON.stringify(snippets));
        }
      });
    }
  $('.textField').val('');
  $('.textArea').val('');

  //$('#test').html($('.textArea').val().replace(/\n/g, '<br>'));
  //$('.debug').html($('.textArea').val().replace(/\n/g, '<br>'));
    
  });
  
  $('.getData').on('click', function() {
    let retrievedSnippets = JSON.parse(localStorage.getItem('snippets'));
    //console.log(retrievedSnippets);
    retrievedSnippets.data.forEach(function(snippet) {
      for (var key in snippet) {
        $('.snippetContainer').append('<div class="snippet" id="' + key +'">'+ snippet[key] + '</div>');
      }
    });
  });

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