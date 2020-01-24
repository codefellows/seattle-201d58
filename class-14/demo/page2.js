'use strict';

instantiate();
console.log(Pokemon.all);

var button = document.getElementById('clickable');
button.addEventListener('click', handleClick);