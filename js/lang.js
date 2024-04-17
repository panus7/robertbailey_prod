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
  function updateContent(langData,langDataDefault) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');

    //   var data = langData[key];
    //   var data = undefined;
    //   try {
    //     data = langData[key]  
    //   } catch (error) {        
    //   }
    const hasjsonprop = Object.hasOwnProperty.call(langData, key)
      
      if(hasjsonprop)
      {
        element.textContent = langData[key];
      }
      else
      { 
        element.textContent = langDataDefault[key];
      }
      
    });
  }
  
  // Function to change language
  async function changeLanguage(lang) {
    await setLanguagePreference(lang);
  
    const langData = await fetchLanguageData(lang);
    const langDataDefault = await fetchLanguageData('en');

    updateContent(langData,langDataDefault);
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
    updateContent(langData,langDataDefault);
    toggleArabicStylesheet(userPreferredLanguage);
  });
  