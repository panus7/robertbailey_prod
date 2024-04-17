
// function setDynamicZoom() {
//     const elmcountry_trunk = document.getElementById("country_trunk");
//     const elmtree_gall = document.getElementById("tree_gall");
     
//     const screenWidth = window.screen.width;
//     console.log('screenWidth',screenWidth); 
    
//     const zoomThresholds = [1680,1440,1280,1110];
//     const zoomFactors = ['60%','70%','80%','90%'];
   
//     let zoomFactor = '100%';
//     for (let i = 0; i < zoomThresholds.length; i++) {
//       if (screenWidth < zoomThresholds[i]) {
//         zoomFactor = zoomFactors[i];
//         console.log('zoomFactor',zoomFactor); 
//         break;
//       }
//     }
  
//     elmtree_gall.style.zoom =  zoomFactor
//     elmcountry_trunk.style.zoom =  zoomFactor
   
//   }
   
//   window.addEventListener("load", setDynamicZoom);
//   window.addEventListener("resize", setDynamicZoom)


//   function checkResolutionAndZoom() {
//     const screenWidth = window.screen.width;
//     console.log('screenWidth',screenWidth); 
    
//     const zoomThresholds = [1680,1440,1280,1110];
//     const zoomFactors = ['60%','70%','80%','90%'];
   
//     let zoomFactor = '100%';
//     for (let i = 0; i < zoomThresholds.length; i++) {
//       if (screenWidth < zoomThresholds[i]) {
//         zoomFactor = zoomFactors[i];
//         console.log('zoomFactor',zoomFactor); 
//         break;
//       }
//     }
    
//     document.body.style.zoom = zoomFactor;
//   } 
//   window.addEventListener("load", checkResolutionAndZoom);