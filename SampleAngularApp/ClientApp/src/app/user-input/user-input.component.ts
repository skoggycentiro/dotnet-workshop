import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/model/pokemon';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  constructor() {}
  pokemon: Pokemon = new Pokemon();
  pokemons: Pokemon[] = [];
  ngOnInit(): void {
    this.pokemon.type = '';
    this.getLocalStorage();
  }

  savePokemon() {
    console.log(this.pokemon);
    this.pokemons.push(this.pokemon);
    this.setLocalStorage();
    this.pokemon = new Pokemon();
    this.pokemon.type = '';
  }

  setLocalStorage() {
    localStorage.setItem('pokemon', JSON.stringify(this.pokemons));
  }

  getLocalStorage() {
    const storagePokemons = localStorage.getItem('pokemon');
    if (storagePokemons) {
      const pokemons: Pokemon[] = JSON.parse(storagePokemons);
      this.pokemons = pokemons;
    }
  }
}
