import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

export const getPokemon = () => {
    return axios.get(URL)
    .then(res => res.data.results)
    .catch(err => console.log(err));
}