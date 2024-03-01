'use client'
import React, { useEffect, useState } from 'react'

type Props = {
	search: (search: string) => Promise<string[]>
}

const PokemonList = ({ search }: Props) => {
	const [pokemonNames, setPokemonNames] = useState<string[]>([])

	useEffect(() => {
		search('').then((names) => setPokemonNames(names))
	}, [search])

	return <div>PokemonList</div>
}

export default PokemonList
