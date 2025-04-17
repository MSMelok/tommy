/*=============== THEME TOGGLE ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill';

// Validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.innerHTML = selectedIcon === 'ri-moon-clear-fill' ? '<i class="ri-moon-clear-fill"></i>' : '<i class="ri-sun-fill"></i>';
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    
    // Change icon based on theme
    if (document.body.classList.contains(darkTheme)) {
        themeButton.innerHTML = '<i class="ri-sun-fill"></i>';
    } else {
        themeButton.innerHTML = '<i class="ri-moon-clear-fill"></i>';
    }
    
    // Save theme and icon to localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // Remove 'filters__active' class from all tab contents
        tabContents.forEach(tc => {
            tc.classList.remove('filters__active');
        });
        
        // Add 'filters__active' class to the target tab content
        target.classList.add('filters__active');
        
        // Remove 'filter-tab-active' class from all tabs
        tabs.forEach(t => {
            t.classList.remove('filter-tab-active');
        });
        
        // Add 'filter-tab-active' class to the clicked tab
        tab.classList.add('filter-tab-active');
    });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 700,
    delay: 100,
    reset: true
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, {delay: 150});
sr.reveal(`.profile__profession`, {delay: 200});
sr.reveal(`.profile__social`, {delay: 250});
sr.reveal(`.profile__info-group`, {interval: 100, delay: 300});
sr.reveal(`.profile__buttons`, {delay: 350});
sr.reveal(`.filters__content`, {delay: 400});
sr.reveal(`.filters__sections`, {delay: 450});

/*=============== PRELOAD IMAGES ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle fade-in effect to the entire page when loaded
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

/*=============== PROJECTS HOVER EFFECTS ===============*/
const projectCards = document.querySelectorAll('.projects__card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const modal = card.querySelector('.projects__modal');
        modal.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        const modal = card.querySelector('.projects__modal');
        modal.style.opacity = '0';
    });
});

/*=============== SKILLS ANIMATION ===============*/
const skillsAreas = document.querySelectorAll('.skills__area');

skillsAreas.forEach(area => {
    sr.reveal(area, {
        interval: 100
    });
    
    const skillsData = area.querySelectorAll('.skills__data');
    skillsData.forEach((data, index) => {
        sr.reveal(data, {
            delay: 150 + (index * 50)
        });
    });
});
