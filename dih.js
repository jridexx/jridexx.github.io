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

//A function to ignore certain references

window.addEventListener("load", function(){
  document.querySelectorAll(".references a").forEach(function(e) {
      e.setAttribute("data-reference", e.innerText);
    });
});

window.addEventListener("load", function(){
  ignoredReferences = [
   "Dossier \/ Experience, The Moment You're Having Right Now",
   "Dossier \/ Understanding Media, Nature of Form",
   "Dossier \/ Modernity, Today and Tomorrow",
   "Dossier \/ America, The Great Dynamic",
   "Dossier \/ Human Cooperation, Cooperative Dynamics",
   "Dossier \/ Reality, The Story That Matters",
   "Dossier \/ New York, Metropolis by the Hudson"
  ];

  ignoredReferences.forEach(function(r){
    document.querySelectorAll("[data-reference='"+r+"']",).forEach(function(e) {
      listItem = e.parentNode;
      list = listItem.parentNode;
      list.removeChild(listItem);
    });    
  });
});
