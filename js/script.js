let elNavLinks = document.querySelectorAll('.header__nav-link')
let elHeaderSection = document.querySelector('.header__section')
let elHamburger = document.querySelector('.header__btn')
let activePage = window.location.pathname

elNavLinks.forEach(link => {
    if(link.href.includes(activePage)){
        link.classList.add('active')
    }
})

elHamburger.addEventListener('click', () => {
    elHeaderSection.classList.toggle('open-modal')
})