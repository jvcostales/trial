function highlightText(element, searchText) {
  var content = element.textContent || element.innerText;
  var caseInsensitiveText = searchText.toLowerCase();

  if (content.toLowerCase().includes(caseInsensitiveText)) {
    var regex = new RegExp('(' + escapeRegExp(caseInsensitiveText) + ')', 'gi');
    content = content.replace(regex, '<span class="highlight">$1</span>');
    element.innerHTML = content;
  }
}

function searchAndHighlight() {
  var searchText = document.getElementById('searchInput').value;
  var divElements = document.querySelectorAll('.searchword');

  divElements.forEach(function (element) {
    element.innerHTML = element.textContent || element.innerText;
    highlightText(element, searchText);
  });
}

// Helper function to escape special characters in the search text
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
