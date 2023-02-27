let counterValue=0;

const valueField = document.getElementById('value')

const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');

minus.addEventListener('click', function(){counterValue--; valueField.textContent = counterValue})
plus.addEventListener('click', function(){counterValue++; valueField.textContent = counterValue})

