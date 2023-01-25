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
  
  document.querySelectorAll('[data-reference^="Public"]').forEach(function(e) {
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
