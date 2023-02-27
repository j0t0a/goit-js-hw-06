function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const switcher = document.querySelector('.change-color')
const colorText = document.querySelector('.color')
const body = document.body

switcher.addEventListener('click', function(){
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor
  colorText.textContent = newColor

})
