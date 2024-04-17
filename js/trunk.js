// function toggleModal() {
//   const modal = document.getElementById('modal');
//   modal.classList.toggle('active');
// }
// const elm_trunkmodalimage = document.getElementById('trunk-modal-image');   

// const opentrunk_th = document.getElementById('opentrunk_th');   
// if(null != opentrunk_th)
// opentrunk_th.addEventListener('click', (event) => handleClick(event, opendlg1.getAttribute('data-image-path')));

// //changeImage
// function handleClick(event,imagePath) { 
//   elm_trunkmodalimage.src = imagePath; 
//   event.preventDefault();
// }


  function setDynamicZoom() {
    const elementToZoom = document.getElementById("main_trunk");
    const elm_trunkshow_modal = document.getElementById("trunkshow_modal");

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
    elm_trunkshow_modal.style.zoom =  "100%"

    const elm_Pic_Korea = document.getElementById('Pic_Korea');
    const elm_Pic_Japan = document.getElementById('Pic_Japan');

    if(screenWidth <= 780) //phone
    {
      elm_Pic_Korea.src = 'img/rob_trunk_show/TS_City_Pic_Korea_land.jpg';
      elm_Pic_Japan.src = 'img/rob_trunk_show/TS_City_Pic_Japan_land.jpg';
      changeClassBasedOnId("div_hori_korea", "col-sm-auto")
      changeClassBasedOnId("div_hori_japan", "col-sm-auto")
    }
    else
    {
      elm_Pic_Japan.src = 'img/rob_trunk_show/TS_City_Pic_Japan.jpg';
      elm_Pic_Korea.src = 'img/rob_trunk_show/TS_City_Pic_Korea.jpg';
      changeClassBasedOnId("div_hori_korea", "col-auto")
      changeClassBasedOnId("div_hori_japan", "col-auto")
    }

  }
  
  function changeClassBasedOnId(divId, newClass) {
    const divElement = document.getElementById(divId); // Get element by ID
  
    if (divElement) { // Check if element exists
      divElement.classList.remove(divElement.className); // Remove existing classes (optional)
      divElement.classList.add(newClass); // Add the new class
    } else {
      console.error("Element with ID", divId, "not found"); // Handle non-existent element
    }
  }

  // Call the function on page load and window resize
  window.addEventListener("load", setDynamicZoom);
  window.addEventListener("resize", setDynamicZoom)