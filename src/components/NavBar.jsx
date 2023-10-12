function NavBar({ handleClick, pokemonList }) {
  return (
    <div>
      {pokemonList.map((element, pokemonIndex) => {
        return (
          <button
            key={element.name}
            onClick={() => {
              handleClick(pokemonIndex);
            }}
          >
            {element.name}
          </button>
        );
      })}
    </div>
  );
}

export default NavBar;
