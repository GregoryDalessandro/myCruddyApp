$(document).ready(function() {
  let snippets = { data: [] };
  let setLocalStorageAsEmptySnippets = function() { localStorage.setItem('snippets', JSON.stringify(snippets));}; 
  
  //setLocalStorageAsEmptySnippets();
  let retrievedSnippets = JSON.parse(localStorage.getItem('snippets'));
  
  retrievedSnippets.data = retrievedSnippets.data.map(function(snippet) {
    return JSON.parse(snippet);
  });
  retrievedSnippets.data.forEach(function(snippet) { 
    for (var key in snippet) {
      $('.sidenav').append('<div class="sideSnippet">' + key + '<div>'); 
    }
    
  });

  //console.log(retrievedSnippets);
  
  snippets.data.forEach(function(snippet) {
    console.log(snippet);
  }); 

  $('.submitForm').on('click', function() {
    let textFieldValue = $('#inputSnippetName').val();
    let textAreaValue = $('.textArea').val();
    let currentSnippet = JSON.stringify({[textFieldValue]: textAreaValue});

    if ($('#inputSnippetName').val() === '' && $('.textArea').val() === '') {
      alert('Please enter a valid name, and fill out form!');
    } else if($('#inputSnippetName').val() === '') {
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
      $('.sidenav').append('<div class="sideSnippet">' + textFieldValue + '<div>');
    }

  $('#inputSnippetName').val('');
  $('.textArea').val('');

  //$('#test').html($('.textArea').val().replace(/\n/g, '<br>'));
  //$('.debug').html($('.textArea').val().replace(/\n/g, '<br>'));
    
  });
  

  $('.getData').on('click', function() {
    if ($('.snippetContainer').css('visibility', 'hidden')) {
      $('.snippetContainer').css('visibility', 'visible');
    }
    let retrievedSnippets = JSON.parse(localStorage.getItem('snippets'));
  
    retrievedSnippets.data = retrievedSnippets.data.map(function(snippet) {
      return JSON.parse(snippet);
    });
    retrievedSnippets.data.forEach(function(snippet) {
      for (var key in snippet) {
        if ($('#' + key).length === 0) {
          $('.snippetContainer').append('<div class="snippet" id="' + key +'"><div class="snippetName">' + key + '</div><pre><code>'+ snippet[key] + '</code></pre></div>');
        //console.log($('#' + key));
        hljs.highlightBlock($("#" + key).get(0))
        }
      }
    }); 
  });

  $('.deleteAll').on('click', function() { 
    $('.sideSnippet').remove();
    $('.snippet').remove();
    snippets = { data: [] };
    setLocalStorageAsEmptySnippets();
  });
  
});
