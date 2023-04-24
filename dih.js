// Makes two initial fixes to the references
window.addEventListener("load", function(){
  
  // Sets an element ID to the reference list
  document.querySelectorAll(".references ul")[0].setAttribute("id", "ref_list");
  
  // Adds roam-block class to list elements
  document.querySelectorAll(".references li").forEach(function(e) {
      e.classList.add("roam-block");
    });
});

// Removes references starting with 'Understanding', 'Ideas', and 'Public'
window.addEventListener("load", function(){
  
  // Sets new attribute to be able to read
  document.querySelectorAll(".references a").forEach(function(e) {
      e.setAttribute("data-reference", e.innerText);
    });
  
  document.querySelectorAll('[data-reference^="Understanding"]').forEach(function(e) {
      listItem = e.parentNode;
      list = listItem.parentNode;
      list.removeChild(listItem);
    });
  
  document.querySelectorAll('[data-reference$="Ideas"]').forEach(function(e) {
    listItem = e.parentNode;
    list = listItem.parentNode;
    list.removeChild(listItem);
  });
  
  document.querySelectorAll('[data-reference^="Meta"]').forEach(function(e) {
    listItem = e.parentNode;
    list = listItem.parentNode;
    list.removeChild(listItem);
  }); 
});

// Removes references section if there's no references to display
window.addEventListener("load", function(){
  
    if(document.querySelectorAll("#ref_list li").length <= 1){
        document.querySelector(".references").style.display="none";
    }
});

// Sorts references in alphabetical order
window.addEventListener("load", function(){
  
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("ref_list");
  switching = true;
  
  /* Make a loop that will continue until no switching has been done: */
  while (switching) {
    
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    
    // Loop through all list items:
    for (i = 1; i < b.length; i++) {
      
      // Start by saying there should be no switching:
      shouldSwitch = false;
      
      /* Check if the next item should switch place with the current item: */
      if (b[i].innerText.toLowerCase() > b[i + 1].innerText.toLowerCase()) {
        
        /* If next item is alphabetically lower than current item, mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    
    if (shouldSwitch) {
      
      /* If a switch has been marked, make the switch and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
});


//This is an action for the share button, it copies the URL to the clipboard

function copyUrlToClipboard() {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
    .then(() => {
      console.log('URL copied to clipboard');
      const nextAction = document.querySelector('#next-action');
      nextAction.innerText = 'URL copied to clipboard!';
    })
    .catch((error) => {
      console.error('Failed to copy URL: ', error);
    });
}
