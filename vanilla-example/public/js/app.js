const bodyElement = document.querySelector('body');
const themeButton = document.querySelector('.theme-button');

/**
 * Checks the system OS to get the preferred user theme.
 * @returns Boolean
 */
const prefersDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * Sets the theme based on the preferred user theme.
 * @returns String
 */
const getPreferredTheme = () => prefersDarkMode() ? 'dark' : 'light';

/**
 * Gets the targeted attribute by checking the current attribute and inversing it.
 * @returns String
 */
const getTargetAttribute = () => bodyElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

// Set the user theme on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('data-theme')) { // Check if data already exists in local storage.
        bodyElement.setAttribute('data-theme', localStorage.getItem('data-theme'));
    } else { // If no data is stored in localstorage, set the data theme to the preferred OS theme.
        localStorage.setItem('data-theme', getPreferredTheme());
        bodyElement.setAttribute('data-theme', getPreferredTheme());
    }
});

// Change the user theme when the theme button is clicked.
themeButton.addEventListener('click', () => {
    localStorage.setItem('data-theme', getTargetAttribute());
    bodyElement.setAttribute('data-theme', getTargetAttribute());
});