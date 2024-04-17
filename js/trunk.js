// function checkResolutionAndZoom() {
//     const screenWidth = window.screen.width;
//     console.log('screenWidth',screenWidth); 
//     const elementToZoom = document.getElementById("main_trunk"); 
//     // if (screenWidth <= 1440) {
//     //     document.body.style.zoom = "75%";
//     //   }
//     // else if (screenWidth <= 1680) {
//     //   document.body.style.zoom = "70%";
//     // } 
//   } 
//   window.addEventListener("load", checkResolutionAndZoom);

  function setDynamicZoom() {
    const elementToZoom = document.getElementById("main_trunk");
    const screenWidth = window.screen.width;
    console.log('screenWidth',screenWidth); 
    
    const zoomThresholds = [1680,1440,1280,1110];
    const zoomFactors = ['60%','70%','80%','90%'];
   
    let zoomFactor = '100%';
    for (let i = 0; i < zoomThresholds.length; i++) {
      if (screenWidth < zoomThresholds[i]) {
        zoomFactor = zoomFactors[i];
        console.log('zoomFactor',zoomFactor); 
        break;
      }
    }

    elementToZoom.style.zoom =  zoomFactor
   
  }
  
  // Call the function on page load and window resize
  window.addEventListener("load", setDynamicZoom);
  window.addEventListener("resize", setDynamicZoom)