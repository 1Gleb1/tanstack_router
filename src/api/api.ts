import axios from 'axios';

export const queryCharacters = async () => {
	return axios
		.get('https://rickandmortyapi.com/api/character')
		.then(res => res.data.results);
};

export const queryCharacter = async (id: number) => {
	return axios
		.get(`https://rickandmortyapi.com/api/character/${id}`)
		.then(res => res.data);
};
