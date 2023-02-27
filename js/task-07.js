const input = document.getElementById('font-size-control')

input.addEventListener('input', function(){
    document.getElementById('text').style.fontSize = input.value + 'px'
})