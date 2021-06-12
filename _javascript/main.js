// Bulma implementation of menu
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  )
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active")
        $target.classList.toggle("is-active")
      })
    })
  }
})

// Services component
const serviceButtons = document.getElementsByClassName("service-button")
const serviceContent = document.getElementsByClassName("service-content")

const handleClick = (event) => {  
  const content = event.currentTarget.dataset.content
  for (let i = 0; i < serviceButtons.length; i++) {
    if (serviceButtons[i].dataset.content == content) {
      serviceContent[i].classList.remove("service-content--hidden")
      serviceButtons[i].classList.add("service-button--active")      
      continue
    }
    serviceContent[i].classList.add("service-content--hidden")
    serviceButtons[i].classList.remove("service-button--active")
  }
}

for (let i = 0; i < serviceButtons.length; i++) {
  serviceButtons[i].addEventListener("click", handleClick)
}


// For the clients carousel
const clientsContainers = document.getElementsByClassName("client-container")
let index = 0

const slideContainerIn = () => {    
  for (let i = 0; i < clientsContainers.length; i++) {
    let item = clientsContainers    
    if(item[i].dataset.index == index) {      
      item[i].classList.add("client-container--absolute")      
      item[i].classList.add("client-container--hidden")
      if (index == 2) {
        index = 0
        item[index].classList.remove("client-container--absolute")
        item[index].classList.remove("client-container--hidden")   
        return
      } else {
        index++
        item[index].classList.remove("client-container--absolute")
        item[index].classList.remove("client-container--hidden")
        return
      }         
    } 
  }
}
setInterval(slideContainerIn, 2600)