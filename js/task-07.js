const input = document.getElementById('font-size-control')
const text = document.getElementById('text')

function changeSize(input){
    text.style.fontSize = input.value + 'px'
}

changeSize(input)

input.addEventListener('input', function(event){
    changeSize(event.target)
})