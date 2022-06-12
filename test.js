// Remove the transition class
  const blockList = document.querySelectorAll('.roam-block');
//  block.classList.remove('block-transition');
  
    // Create the observer
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        
              if (entry.isIntersecting) {
                
                // It's visible. Add the animation class here!
                block.classList.add('block-transition');
                
              }

              block.classList.remove('block-transition');
      });
      
    });
    
   blockList.forEach((el) => {
  observer.observe(el);
})
