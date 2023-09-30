let hamburgerBtnOpen = document.querySelector("#hamburgerBtnOpen")
let hamburgerBtnClose = document.querySelector("#hamburgerBtnClose")
let hamburgerMenu = document.querySelector("#hamburgerMenu")

hamburgerBtnOpen.addEventListener('click', () => {
  hamburgerMenu.classList.add('--active')
})

hamburgerBtnClose.addEventListener('click', () => {
  hamburgerMenu.classList.remove('--active')
})