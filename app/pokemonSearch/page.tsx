import React from 'react'

type Props = {}

const PokemonSearch = (props: Props) => {
	const search = async (search: string) => {
		'use server'

		const pokemonRes = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
		)

		const pokemonData = await pokemonRes.json()

		return pokemonData.results
			.filter((p: { name: string }) =>
				p.name.toLowerCase().includes(search.toLowerCase())
			)
			.map((p: { name: string }) => p.name)
			.slice(0, 50)
	}

	return <div>PokemonSearch</div>
}

export default PokemonSearch
