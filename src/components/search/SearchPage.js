import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import HeroeCard from '../heroes/HeroeCard'
import getHeroesByName from '../../selectors/getHeroesByName'

export const SearchPage = ({ history }) => {
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)

	const [{ heroInput }, handleInputChange] = useForm({
		heroInput: q,
	})

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

	const handleSearch = (e) => {
		e.preventDefault()
		if (heroInput.trim().length <= 1) {
			return
		}
		history.push(`?q=${heroInput}`)
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

				{q === '' && (
					<div className="alert alert-info">
						{' '}
						<p className="text-center mb-0">Search a heroe</p>{' '}
					</div>
				)}
				{q !== '' && heroesFiltered.length === 0 && (
					<div className="alert alert-danger">
						<p className="text-center m-0">
							There aren't heroe <strong>"{q}"</strong>
						</p>
					</div>
				)}
				{heroesFiltered.map((heroe) => (
					<HeroeCard key={heroe.id} {...heroe} />
				))}
			</div>
		</div>
	)
}
