
function setDynamicZoom() {
    const elmvdo = document.getElementById("myVideo"); 
     
    var frames_VidZoom_In = [
        { transform: 'scale(1, 1)', transition: 'transform 0.5s' },
    
        { transform: 'scale(2, 2)', transition: 'transform 0.5s' }
            
    ]; 

    elmvdo.animate( frames_VidZoom_In, { duration: 6000, easing: 'ease-in' } ); 
    elmvdo.style.transform = "scale(1,1)"; 
}
   
  window.addEventListener("load", setDynamicZoom);
  window.addEventListener("resize", setDynamicZoom)


 