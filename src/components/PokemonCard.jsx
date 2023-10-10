function PokemonCard({ pokemon }) {
  console.log({ pokemon });

  return (
    <div>
      <figure>
        <figcaption>{pokemon.name}</figcaption>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      </figure>
    </div>
  );
}
export default PokemonCard;
