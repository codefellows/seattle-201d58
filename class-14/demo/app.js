'use strict';

Pokemon.all = JSON.parse(localStorage.getItem('key')) || [];
function Pokemon(name, image) {
  this.name = name;
  this.image = image;
  Pokemon.all.push(this);
  localStorage.setItem('key', JSON.stringify(Pokemon.all));
}

function instantiate() {
  if (!Pokemon.all.length) { // if there is no length to this array
    new Pokemon('Jacob', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');
  }
}

function handleClick(event) {
  console.log(event.target.id);
}