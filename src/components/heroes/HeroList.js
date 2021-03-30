import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroeCard from './HeroeCard'

const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
	// const heroes = getHeroesByPublisher(publisher)
	return (
		<div className="card-columns animate__animated animate__fadeIn">
			{heroes.map((heroe) => (
				<HeroeCard key={heroe.id} {...heroe} />
			))}
		</div>
	)
}

export default HeroList
