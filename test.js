// Create IntersectionObserver object to monitor viewport

    const io = new IntersectionObserver(entries => {
      
      entries.forEach(entry => {
        
        // Add 'active' class (.block-transition) if observation target is inside viewport
        
        if (entry.intersectionRatio > 0) {
          
          entry.target.classList.add('block-transition');
          
        }
      });
    });

// On Load function
    
    window.addEventListener("load", function(){
      
      document.querySelectorAll('.roam-block').forEach((el) => {
        
        io.observe(el);
        
        });
    });
