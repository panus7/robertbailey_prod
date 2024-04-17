function checkResolutionAndZoom() {
    const screenWidth = window.screen.width;
    //console.log('screenWidth',screenWidth); 
    
    const zoomThresholds = [1680,1440,1280,1110];
    const zoomFactors = ['60%','70%','80%','90%'];
   
    let zoomFactor = '100%';
    for (let i = 0; i < zoomThresholds.length; i++) {
      if (screenWidth < zoomThresholds[i]) {
        zoomFactor = zoomFactors[i];
       // console.log('zoomFactor',zoomFactor); 
        break;
      }
    }
    
    document.body.style.zoom = zoomFactor;
  } 
  window.addEventListener("load", checkResolutionAndZoom);