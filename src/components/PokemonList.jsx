import PokemonCard from "./PokemonCard"
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <div className="PokemonList">
        {pokemons.map(({name, url}, id) => {
            return <PokemonCard name={name} url={url} key={id}/>;
        })}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), //['', '', '', '']
}

export default PokemonList