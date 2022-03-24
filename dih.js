// A function to show references if there's references (commented out)

/* window.addEventListener("load", function(){
  
  const references = document.getElementsByClassName("references")[0];
  if (references != undefined && references.children[1].childElementCount > 0) {
    references.style.display="block";
  }
  
});*/

//A function to ignore certain references

window.addEventListener("load", function(){
  document.querySelectorAll(".references li").forEach(function(e) {
      listItem = e.parentNode;
      list = listItem.parentNode;
      list.classList.add("roam-block");
    });
});
