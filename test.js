 
//  block.classList.remove('block-transition');
  
    // Create the observer
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        
              if (entry.isIntersecting) {
                
                // It's visible. Add the animation class here!
                entry.target.classList.add('block-transition');
                
              }

              entry.target.classList.remove('block-transition');
        
      });
      
    });

  const blockList = document.querySelectorAll('.roam-block');
    
  blockList.forEach((el) => {
      observer.observe(el);
  });
