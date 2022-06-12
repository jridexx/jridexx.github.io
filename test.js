// Remove the transition class
  const block = document.querySelectorAll('.roam-block');
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
    
    // Tell the observer which elements to track
    observer.observe(document.querySelectorAll('.roam-block'));
