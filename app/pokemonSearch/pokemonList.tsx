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

	return <div className='text-4xl py-5'>Names: {pokemonNames.join(", ")}</div>
}

export default PokemonList
