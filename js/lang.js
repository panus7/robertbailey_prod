// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`languages/${lang}.json`);
  return response.json();
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

// Function to update content based on selected language
function updateContent(langData, langDataDefault) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');


    const hasjsonprop = Object.hasOwnProperty.call(langData, key)

    if (hasjsonprop) {
      if (langData[key]) {
        //element.textContent = langData[key];
        if (langData[key].includes("<br/>")) {
          element.innerHTML = langData[key];
        } else {
          element.textContent = langData[key];
        }
      }
      else {
        //console.log('lang-data=' + key)
      }
    }
    else {
      //element.textContent = langDataDefault[key];
      if (langDataDefault[key]) {
        if (langDataDefault[key].includes("<br/>")) {
          element.innerHTML = langDataDefault[key];
        } else {
          element.textContent = langDataDefault[key];
        }
      }
      else {
        //console.log('lang-default-data=' + key)
      }

    }

  });
}


function changLangChangeImg(currentLanguage) {
  console.log("currentLanguage : ", currentLanguage);
  chnageFontBody(currentLanguage)

  if (currentLanguage === "jp") {
    changeImage_contact("img/Icon/btn_contact_us_jp.png");
    changeImage_top("img/Icon/Button_Icon-jp.png");
  } else if (currentLanguage === "kr") {
    changeImage_contact("img/Icon/btn_contact_us_kr.png");
    changeImage_top("img/Icon/Button_Icon-kr.png");
  } else if (currentLanguage === "tc") {
    changeImage_contact("img/Icon/btn_contact_us_ch.png");
    changeImage_top("img/Icon/Button_Icon-ch.png");
  } else if (currentLanguage === "th") {
    changeImage_contact("img/Icon/btn_contact_us.png");
    changeImage_top("img/Icon/Button_Icon-01.png");
  } else {
    changeImage_contact("img/Icon/btn_contact_us.png");
    changeImage_top("img/Icon/Button_Icon-01.png");
  }
}

const body = document.body;
function chnageFontBody(lang) {
  body.className = lang;
}

function changeImage_contact(newImageSrc) {
  const imageElement = document.getElementById("btnContact");
  if (imageElement) {
    imageElement.src = newImageSrc;
  }
}

function changeImage_top(newImageSrc) {
  const imageElement = document.getElementById("btnTop");
  if (imageElement) {
    imageElement.src = newImageSrc;
  }
}


// <img alt="Top" src="img/Icon/Button_Icon-01.png">

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  const langDataDefault = await fetchLanguageData('en');

  updateContent(langData, langDataDefault);
  changLangChangeImg(lang);
  //
  toggleArabicStylesheet(lang); // Toggle Arabic stylesheet
}

// Function to toggle Arabic stylesheet based on language selection
function toggleArabicStylesheet(lang) {
  const head = document.querySelector('head');
  const link = document.querySelector('#styles-link');

  if (link) {
    head.removeChild(link); // Remove the old stylesheet link
  } else if (lang === 'ar') {
    const newLink = document.createElement('link');
    newLink.id = 'styles-link';
    newLink.rel = 'stylesheet';
    newLink.href = './assets/css/style-ar.css'; // Path to Arabic stylesheet
    head.appendChild(newLink);
  }
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'en';
  const langData = await fetchLanguageData(userPreferredLanguage);
  const langDataDefault = await fetchLanguageData('en');
  updateContent(langData, langDataDefault);
  changLangChangeImg(userPreferredLanguage);
  toggleArabicStylesheet(userPreferredLanguage);
});


