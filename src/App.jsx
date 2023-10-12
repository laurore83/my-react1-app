// import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const handleClick = (pokemonIndex) => {
    setpokemonIndex(pokemonIndex);
  };
  return (
    <div>
      <div>
        <NavBar
          setpokemonIndex={setpokemonIndex}
          handleClick={handleClick}
          pokemonList={pokemonList}
        />
      </div>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </div>
  );
}

export default App;
