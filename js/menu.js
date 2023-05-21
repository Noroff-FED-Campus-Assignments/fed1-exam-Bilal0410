document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementsByClassName('toggle-btn')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  
    const blogContainers = document.getElementsByClassName('blogContainer');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  
    Array.from(blogContainers).forEach((container) => {
      const nxtBtn = container.closest('.blog').querySelector('.nxt-btn');
      const preBtn = container.closest('.blog').querySelector('.pre-btn');
  
      if (nxtBtn && preBtn) {
        let containerDimensions = container.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
  
        nxtBtn.addEventListener('click', () => {
          container.scrollLeft += containerWidth;
        });
  
        preBtn.addEventListener('click', () => {
          container.scrollLeft -= containerWidth;
        });
      }
    });
  });