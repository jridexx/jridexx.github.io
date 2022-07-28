// A function to show references if there's references (commented out)

/* window.addEventListener("load", function(){
  
  const references = document.getElementsByClassName("references")[0];
  if (references != undefined && references.children[1].childElementCount > 0) {
    references.style.display="block";
  }
  
});*/

//A function to add a class by selector

window.addEventListener("load", function(){
  document.querySelectorAll(".references li").forEach(function(e) {
      e.classList.add("roam-block");
    });
});

//A function to remove references starting with Nexus in two steps, adding attribute, reading attribute

window.addEventListener("load", function(){
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
});
