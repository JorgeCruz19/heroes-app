import { heroesData } from '../data/HeroesData'

export const getHeroesByPublisher = (publisher) => {
	const validPublishers = ['DC Comics', 'Marvel Comics']

	if (!validPublishers.includes(publisher)) {
		console.log('error')
		throw new Error(`El publisher ${publisher} no es válido`)
	}

	return heroesData.filter((hero) => hero.publisher === publisher)
}
