const cookieDialog = document.getElementById('cookie-dialog');
const acceptCookieBtn = document.getElementById('accept-cookie-btn');

acceptCookieBtn.addEventListener('click', function() {
  
  cookieDialog.style.display = 'none'; 

  localStorage.setItem('acceptCookie', true);

  // Alternative: Using cookies (less secure, might require additional setup)
  // document.cookie = "acceptCookie=true; expires=Thu, 31 Dec 2024 23:59:59 GMT; path=/";

});
 
if (localStorage.getItem('acceptCookie')) {
  cookieDialog.style.display = 'none';
}
 
function setDynamicZoom() {
  const elmcountry_trunk = document.getElementById("country_trunk");
  const elmtree_gall = document.getElementById("tree_gall");
   
  const screenWidth = window.screen.width;
  //console.log('screenWidth',screenWidth); 
  
  // const zoomThresholds = [1680,1440,1280,111,600];
  //  const zoomFactors = ['40%','60%','70%','80%','90%'];

  const zoomThresholds = [600,800,1000];
  const zoomFactors = ['40%','80%','90%'];
 
  let zoomFactor = '100%';
  for (let i = 0; i < zoomThresholds.length; i++) {
    if (screenWidth < zoomThresholds[i]) {
      zoomFactor = zoomFactors[i];
      // console.log('zoom tree_gall ',zoomFactor); 
      break;
    }
  }

  elmtree_gall.style.zoom =  zoomFactor
  elmcountry_trunk.style.zoom =  zoomFactor 

}
 
window.addEventListener("load", setDynamicZoom);
window.addEventListener("resize", setDynamicZoom)