// Add your inline JS here

// Saving Theme in local storage //
const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function(theme){
    localStorage.setItem("theme", theme);
};

// Retrieving Theme from local storage //
const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");

    colorThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
};

colorThemes.forEach( (themeOption)  => {
    _themeColor.addEventListener("click",()=>{
        storeTheme(themeOption.id);
    });
});

document.onload = retrieveTheme();

