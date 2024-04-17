function adjustBackgroundImage() {
    const screenWidth = window.innerWidth;
    const mobileBreakpoint = 768; // Adjust as needed
    const element = document.getElementById('a1');
   //robbgpreA01
     if (screenWidth <= mobileBreakpoint) {
        element.style.backgroundImage = "url('../img/rob_accessories/BG_Accessories_page_BG1.jpg'"
        element.style.backgroundSize="200% 70%";
     }
  }
  
  window.addEventListener('load', adjustBackgroundImage);
  window.addEventListener('resize', adjustBackgroundImage);