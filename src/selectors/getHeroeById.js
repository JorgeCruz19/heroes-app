import { heroesData } from '../data/HeroesData'

export const getHeroeById = (id) => {
	return heroesData.find((hero) => hero.id === id)
}
