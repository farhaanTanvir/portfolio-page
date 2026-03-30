// HAMBURGER MENU

const hamButton = document.querySelector('.ham');
// const filter = document.querySelector('.dark-filter');
const header = document.querySelector('header');



function hideHam() {
    const root = document.documentElement;
    root.style.setProperty('--right', '-100%');
    document.removeEventListener('click', insideHam);
    // filter.classList.remove('filter-active');
    // header.classList.remove('header-active');
}



function showHam(event) {
    const root = document.documentElement;
    root.style.setProperty('--right', '0%');
    document.addEventListener('click', insideHam);
    event.stopPropagation();
    // filter.classList.add('filter-active');
    // header.classList.add('header-active');
}

function insideHam(event) {
    hideHam();
    if (event.target.classList.contains("ham-item")) {

    } else {
        event.preventDefault();
    }
};


hamButton.addEventListener('click', showHam);