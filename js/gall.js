


function setDynamicZoom() {
   
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
  
    elmtree_gall.style.zoom =  zoomFactor
    elmcountry_trunk.style.zoom =  zoomFactor
   
    if(screenWidth < 500)
    {
      document.body.style.zoom = zoomFactor;
    } 
  }
   
window.addEventListener("load", setDynamicZoom);
window.addEventListener("resize", setDynamicZoom)


const modalImage = document.getElementById('modal-image'); 

const opendlg1 = document.getElementById('opendlg1');   
if(null != opendlg1)
opendlg1.addEventListener('click', (event) => handleClick(event, opendlg1.getAttribute('data-image-path')));

const opendlg2 = document.getElementById('opendlg2');   
if(null != opendlg2)
opendlg2.addEventListener('click', (event) => handleClick(event, opendlg2.getAttribute('data-image-path')));

const opendlg3 = document.getElementById('opendlg3');   
if(null != opendlg3)
opendlg3.addEventListener('click', (event) => handleClick(event, opendlg3.getAttribute('data-image-path')));

const opendlg4 = document.getElementById('opendlg4');   
if(null != opendlg4)
opendlg4.addEventListener('click', (event) => handleClick(event, opendlg4.getAttribute('data-image-path')));

const opendlg5 = document.getElementById('opendlg5');   
if(null != opendlg5)
opendlg5.addEventListener('click', (event) => handleClick(event, opendlg5.getAttribute('data-image-path')));

const opendlg6 = document.getElementById('opendlg6');   
if(null != opendlg6)
opendlg6.addEventListener('click', (event) => handleClick(event, opendlg6.getAttribute('data-image-path')));

const opendlg7 = document.getElementById('opendlg7');   
if(null != opendlg7)
opendlg7.addEventListener('click', (event) => handleClick(event, opendlg7.getAttribute('data-image-path')));

const opendlg8 = document.getElementById('opendlg8');   
if(null != opendlg8)
opendlg8.addEventListener('click', (event) => handleClick(event, opendlg8.getAttribute('data-image-path')));

const opendlg9 = document.getElementById('opendlg9');   
if(null != opendlg9)
opendlg9.addEventListener('click', (event) => handleClick(event, opendlg9.getAttribute('data-image-path')));

const opendlg10 = document.getElementById('opendlg10');   
if(null != opendlg10)
opendlg10.addEventListener('click', (event) => handleClick(event, opendlg10.getAttribute('data-image-path')));

const opendlg11 = document.getElementById('opendlg11');   
if(null != opendlg11)
opendlg11.addEventListener('click', (event) => handleClick(event, opendlg11.getAttribute('data-image-path')));

const opendlg12 = document.getElementById('opendlg12');   
if(null != opendlg12)
opendlg12.addEventListener('click', (event) => handleClick(event, opendlg12.getAttribute('data-image-path')));

function handleClick(event,imagePath) { 
    modalImage.src = imagePath; 
    event.preventDefault();
}
 