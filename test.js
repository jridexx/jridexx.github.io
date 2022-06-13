const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Add 'active' class if observation target is inside viewport
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('block-transition');
    }
    // Remove 'active' class otherwise
    else {
      entry.target.classList.remove('block-transition');
    }
  })
})

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll('.roam-block');
boxElList.forEach((el) => {
  io.observe(el);
}) 
