import animate from './animate'
import initMap from './init-map'

document.addEventListener('DOMContentLoaded', () => {
    const btnElem = document.querySelector('.js-header__action_btn')
    const copyrightYearElem = document.querySelector('.js-footer-copyright-year')

    btnElem.addEventListener('click', () => {
        const target = document.getElementById('call')
        animate(document.documentElement, "scrollTop", "", 0, target.offsetTop, 1000, true);
        return false
    })

    initMap()

    const year = (new Date()).getFullYear()
    copyrightYearElem.textContent = year

})