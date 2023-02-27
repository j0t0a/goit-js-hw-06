const elem = document.getElementById('name-input')

elem.addEventListener('input', function(){
    const newValue = elem.value || 'Anonymus'

    document.getElementById('name-output').textContent = newValue;
})