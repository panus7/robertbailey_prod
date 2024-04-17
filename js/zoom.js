function checkResolutionAndZoom() {
    const screenWidth = window.screen.width;
    console.log('Width',screenWidth);  
    //const zoomThresholds = [1680,1440,1280,1110];
    //const zoomFactors = ['70%','80%','90%','100%']; 
    const zoomThresholds = [1000,1200,1400,1600];
    const zoomFactors = ['70%','80%','90%','100%']; 
    let zoomFactor = '100%';
    for (let i = 0; i < zoomThresholds.length; i++) {
      if (screenWidth <= zoomThresholds[i]) {
        zoomFactor = zoomFactors[i];
        console.log('Zoom',zoomFactor); 
        break;
      }
    } 
    document.body.style.zoom = zoomFactor; 

    if(screenWidth < 1300)
    {
      const navItems = document.getElementsByClassName('nav-link');  
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.fontSize = '14px';
      }
    }  

  } 
  window.addEventListener("load", checkResolutionAndZoom);
