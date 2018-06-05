$(document).ready(function() {
  let snippets = { data: [] };

  $('.submitForm').on('click', function() {
    let textFieldValue = $('.textField').val();
    let textAreaValue = $('.textArea').val();
    let currentSnippet = JSON.stringify({[textFieldValue]: textAreaValue});
    //console.log(currentSnippet);

    if ($('.textField').val() === '' && $('.textArea').val() === '') {
      alert('Please enter a valid name, and fill out form!');
    } else if($('.textField').val() === '') {
      alert('Please enter a valid name!');
    } else if ($('.textArea').val() === '') {
      alert('Please fill out form!');
    } else {
      if (!snippets.data.includes(currentSnippet)) {
        snippets.data.push(currentSnippet);
        localStorage.setItem('snippets', JSON.stringify(snippets));
      } else {
        alert('snippet already saved!'); 
      }
    }
    //console.log(snippets);

  $('.textField').val('');
  $('.textArea').val('');

  //$('#test').html($('.textArea').val().replace(/\n/g, '<br>'));
  //$('.debug').html($('.textArea').val().replace(/\n/g, '<br>'));
    
  });
  

  $('.getData').on('click', function() {
    let retrievedSnippets = JSON.parse(localStorage.getItem('snippets'));
   
    retrievedSnippets.data = retrievedSnippets.data.map(function(snippet) {
      return JSON.parse(snippet);
    });
    
    retrievedSnippets.data.forEach(function(snippet) {
      for (var key in snippet) {
        if ($('#' + key).length === 0) {
          $('.snippetContainer').append('<div class="snippet" id="' + key +'">'+ snippet[key] + '</div>');     
        }
      }
    }); 
  });
});

// tags: []
// [‘collection’, ‘es6’]