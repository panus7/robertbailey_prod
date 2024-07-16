
function setDynamicZoom() {
 
    const elmcountry_trunk = document.getElementById("country_trunk");
    const elmtree_gall = document.getElementById("tree_gall");

    const screenWidth = window.screen.width;
    const zoomThresholds = [600, 800, 1000];
    const zoomFactors = ['40%', '80%', '90%'];

    let zoomFactor = '100%';
    for (let i = 0; i < zoomThresholds.length; i++) {
        if (screenWidth < zoomThresholds[i]) {
            zoomFactor = zoomFactors[i];
            // console.log('zoom tree_gall ',zoomFactor); 
            break;
        }
    }

    if (elmtree_gall)
        elmtree_gall.style.zoom = zoomFactor

    if (elmcountry_trunk)
        elmcountry_trunk.style.zoom = zoomFactor

    // var elm_div_robbgpre01 = document.getElementById("div_robbgpre01");
    // var rect = elm_div_robbgpre01.getBoundingClientRect();
    // var width = rect.width;
    // var height = rect.height;
    // elm_p_robbgpre01_size.textContent = "div_robbgpre01> (Width: " + width + " px, Height:" + height + " px )";
}

window.addEventListener("load", setDynamicZoom);
window.addEventListener("resize", setDynamicZoom)



// const cookieDialog = document.getElementById('cookie-dialog');
// const acceptCookieBtn = document.getElementById('accept-cookie-btn');
// const elm_p_robbgpre01_size = document.getElementById("div_robbgpre01_size");

// function setDynamicZoom() {
//   const elmcountry_trunk = document.getElementById("country_trunk");
//   const elmtree_gall = document.getElementById("tree_gall");

//   const screenWidth = window.screen.width;
//   console.log('screenWidth', screenWidth);

//   // const zoomThresholds = [1680,1440,1280,111,600];
//   //  const zoomFactors = ['40%','60%','70%','80%','90%'];

//   const zoomThresholds = [600, 800, 1000];
//   const zoomFactors = ['40%', '80%', '90%'];

//   let zoomFactor = '100%';
//   for (let i = 0; i < zoomThresholds.length; i++) {
//     if (screenWidth < zoomThresholds[i]) {
//       zoomFactor = zoomFactors[i];
//       // console.log('zoom tree_gall ',zoomFactor); 
//       break;
//     }
//   }

//   elmtree_gall.style.zoom = zoomFactor
//   elmcountry_trunk.style.zoom = zoomFactor



//   var elm_div_robbgpre01 = document.getElementById("div_robbgpre01");
//   var rect = elm_div_robbgpre01.getBoundingClientRect();
//   var width = rect.width;
//   var height = rect.height;
//   // elm_p_robbgpre01_size.textContent = "div_robbgpre01> (Width: " + width + " px, Height:" + height + " px )";

// }

// window.addEventListener("load", setDynamicZoom);
// window.addEventListener("resize", setDynamicZoom)

