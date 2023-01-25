// A function to show references if there's references (commented out, not used rn)

/* window.addEventListener("load", function(){
  
  const references = document.getElementsByClassName("references")[0];
  if (references != undefined && references.children[1].childElementCount > 0) {
    references.style.display="block";
  }
  
}); */

// Two functions: 1) Sets attribute to reference list and 2) Adds roam-block class to list elements

window.addEventListener("load", function(){
  document.querySelectorAll(".references ul")[0].setAttribute("id", "ref_list");
  document.querySelectorAll(".references li").forEach(function(e) {
      e.classList.add("roam-block");
    });
});

//A function to add an attribute by selector

window.addEventListener("load", function(){
  
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
  
  document.querySelectorAll('[data-reference^="Public"]').forEach(function(e) {
    listItem = e.parentNode;
    list = listItem.parentNode;
    list.removeChild(listItem);
  }); 
});

// A function to remove references if there's no references

window.addEventListener("load", function(){
  
  const references = document.getElementsByClassName("references")[0];
  if (references = undefined) {
    references.style.display="none";
  }
  
});
