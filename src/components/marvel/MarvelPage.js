import HeroList from '../heroes/HeroList'

export const MarvelPage = () => {
	return (
		<>
			<h1 className="text-center my-4">Marvel Page</h1>
			<HeroList publisher="Marvel Comics" />
		</>
	)
}
