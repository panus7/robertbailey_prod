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
        console.log('main zoomFactor',zoomFactor) 
        break;
      }
    } 
    document.body.style.zoom = zoomFactor; 

    if(screenWidth > 800 && screenWidth < 1300)
    {
      const navItems = document.getElementsByClassName('nav-link');  
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.fontSize = '14px';
      }
    }  

    //footer_card

  } 
  window.addEventListener("load", checkResolutionAndZoom);


  function setfooterDynamicZoom() {

    const elm_footer_card = document.getElementById("footer_card");      
    const screenWidth = window.screen.width; 
    const zoomThresholds = [375,600,800,1000];
    const zoomFactors = ['80%','90%','80%','90%'];
   
    let zoomFactor = '100%';
    for (let i = 0; i < zoomThresholds.length; i++) {
      if (screenWidth < zoomThresholds[i]) {
        zoomFactor = zoomFactors[i];         
        break;
      }
    } 
    elm_footer_card.style.zoom =  zoomFactor  
  }
   
  window.addEventListener("load", setfooterDynamicZoom);
  window.addEventListener("resize", setfooterDynamicZoom)
  