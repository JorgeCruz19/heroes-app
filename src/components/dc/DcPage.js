import HeroList from '../heroes/HeroList'

export const DcPage = () => {
	return (
		<>
			<h1 className="text-center my-4">DC</h1>
			<HeroList publisher="DC Comics" />
		</>
	)
}
