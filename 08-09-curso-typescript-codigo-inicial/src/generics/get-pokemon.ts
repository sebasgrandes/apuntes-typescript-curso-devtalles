import axios from "axios";
import { Pokemon } from "../interfaces";

/* El <Pokemon>:
el 1ero significa que lo que viene en la respuesta, especificamente lo de la data, (o sea lo que viene de la peticion get) es de tipo <Pokemon>
el 2do significa que lo retornado por la funcion es de tipo <Pokemon>
*/

// gracias a ese tipo definido, el autcompletado funciona y es muy util
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    console.log(data.abilities[0].ability.url);
    return data;
};
