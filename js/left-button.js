const button = document.getElementById('myContact');

if (button) {
  const initialTop = button.offsetTop; // Access offsetTop only if button exists

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > initialTop) {
      button.style.top = '${50}px'; // Fix button at 50px from top after scrolling
      button.style.zindex = '1000'; 
    } else {
      button.style.top = ''; // Reset button position when above initial position
    }
  });
} else {
  console.error('Button element not found! Check the ID.');
}

// if (button) {
//   window.addEventListener('scroll', function() {
//     button.style.top = `${window.pageYOffset + 50}px`;
//   });
// } else {
//   console.error("Button element not found! Check the ID.");
// }