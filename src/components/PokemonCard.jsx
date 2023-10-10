import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
