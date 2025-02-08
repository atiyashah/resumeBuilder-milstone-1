// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// // previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')


// // we obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme =  () =>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon =  () =>themeButton.classList.contains(darkTheme) ? 'bx bx-moon' : 'bx bx-sun'

// // we validate if the user previously chose a topic
// if(selectedTheme){

//     // if the validation is fuilfilled, we ask what the issue was to khnow if we activated or deactivated the dark
//    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
// }











const themeButton = document.getElementById('theme-button') as HTMLElement | null; // Explicitly declare as HTMLElement | null
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'); // This will be of type string | null
const selectedIcon = localStorage.getItem('selected-icon'); // This will also be of type string | null

// Function to get the current theme
const getCurrentTheme = (): 'dark' | 'light' =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Function to get the current icon
const getCurrentIcon = (): string =>
    themeButton?.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, apply the stored theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);

    // Ensure themeButton exists before accessing its classList
    if (themeButton) {
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
    }
}

// Add a click event listener for toggling themes
themeButton?.addEventListener('click', () => {
    // Toggle the dark theme on the body
    document.body.classList.toggle(darkTheme);

    // Toggle the icon class on the button
    if (themeButton) {
        themeButton.classList.toggle(iconTheme);
    }

    // Save the current theme and icon to localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
