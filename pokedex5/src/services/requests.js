import axios from 'axios';

export const getPokemon = (saveData)=>{
    axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
    )
    .then((res)=>{
        saveData(res.data.results)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}