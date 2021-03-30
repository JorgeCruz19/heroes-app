import { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById'
export const HeroesPage = ({ history }) => {
	const { heroId } = useParams()

	const heroe = useMemo(() => getHeroeById(heroId), [heroId])
	// const heroe = getHeroeById(heroId)

	if (!heroe) {
		return <Redirect to="/" />
	}

	const handleReturn = (e) => {
		if (history.lenght <= 2) {
			history.push('/')
		} else {
			history.goBack()
		}
	}
	const { superhero, publisher, alter_ego, first_appearance, characters } = heroe

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-4">
					<img src={`../assets/${heroId}.jpg`} alt={superhero} className="img-thumbnail img-fluid card-img-top animate__animated animate__fadeInLeft" />
				</div>
				<div className="col-8">
					<h3>{superhero}</h3>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<strong>Alter Ego:</strong> {alter_ego}
						</li>
						<li className="list-group-item">
							<strong>Publisher:</strong> {publisher}
						</li>
						<li className="list-group-item">
							<strong>First Appearance:</strong> {first_appearance}
						</li>
					</ul>
					<h5>Characters</h5>
					<p>{characters}</p>

					<button onClick={handleReturn} className="btn btn-outline-primary">
						Regresar
					</button>
				</div>
			</div>
		</div>
	)
}
