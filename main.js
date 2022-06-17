const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
 showNavOnScroll()
 showBackToTopButtononScroll()

 activateMenuAtCurrentSection(home)
 activateMenuAtCurrentSection(services)
 activateMenuAtCurrentSection(about)
 activateMenuAtCurrentSection(contact)

}
function activateMenuAtCurrentSection (section) {
const targetLine = scrollY + innerHeight / 2
top
const sectionTop = section.offsetTop

const sectionHeigth = section.offsetHeigth

const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

const sectionEndsAt = sectionTop + sectionHeigth

const sectionEndPassedTargetline = sectionEndsAt <= targetLine

const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionTopReachOrPassedTargetline

const sectionId = section.getAttribute('id')
const menuElement = document.querySelector (`menu a [herf*=${sectionId}]`)

menuElement.classList.remove('active')
if (sectionBoundaries){
 menuElement.classList.add('active')
}



}

function showNavOnScroll() {
  if (scrollY> 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTopButtononscroll() {
  if (scrollY > 550){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')

}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:700,
}).reveal(`#home, #home img, .stats,
#services, services header,#services .cards
#about, #about header, #about .contend`)

