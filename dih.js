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
   "Nexus / Experience, What You're Having Right Now",
   "Nexus / Media, Nature of Form",
   "Nexus / Modernity, The Present Situation",
   "Nexus / America, The Great Dynamic",
   "Nexus / New York, Western Metropolis",
   "Nexus / Human Cooperation, Growing Together",
   "Nexus / Capitalism, For-Profit Cooperation",
   "Nexus / Ethics, Acting In Consequence",
   "Nexus / Reality, Non-Fiction",
   "Nexus / The Web, Happening Online",
   "Nexus / Cultural Forms, Ways and Means of Humankind"
  ];

  ignoredReferences.forEach(function(r){
    
    document.querySelector('[data-reference^="Nexus"]').forEach(function(e) {
      listItem = e.parentNode;
      list = listItem.parentNode;
      list.removeChild(listItem);
    });    
  });
});

//document.querySelectorAll("[data-reference='"+r+"']",)
