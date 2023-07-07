const switcherBtn = document.querySelector('.switcher-btn');
const colorSwitcher = document.querySelector('.color-switcher');

switcherBtn.onclick = () => {
    colorSwitcher.classList.toggle('active');
}

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor)
    })
})
