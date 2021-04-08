import { heroesData } from '../data/HeroesData'

const getHeroesByName = (name = '') => {
	if (name === '') {
		return []
	}
	return heroesData.filter((heroe) => heroe.superhero.toLowerCase().includes(name.toLowerCase()))
}

export default getHeroesByName
