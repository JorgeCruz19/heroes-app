import { heroesData } from '../../data/HeroesData'
import { useForm } from '../../hooks/useForm'
import HeroeCard from '../heroes/HeroeCard'

export const SearchPage = () => {
	const listHeroesData = heroesData

	const [{ heroInput }, handleInputChange] = useForm({
		heroInput: '',
	})

	const handleSearch = (e) => {
		e.preventDefault()
		if (heroInput.trim().length <= 1) {
			return
		}
	}

	return (
		<div className="row my-5">
			<div className="col-5">
				<h1>Search Heroe</h1>
				<hr />
				<form onSubmit={handleSearch}>
					<input className="form-control mb-3" name="heroInput" value={heroInput} onChange={handleInputChange} type="text" placeholder="Find your heroe" />
					<button className="btn btn-primary">Search</button>
				</form>
			</div>
			<div className="col-7">
				<h4>Results</h4>
				<hr />
				{listHeroesData.map((heroe) => (
					<HeroeCard key={heroe.id} {...heroe} />
				))}
			</div>
		</div>
	)
}
