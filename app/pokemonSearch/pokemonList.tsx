'use client'
import React, { useState } from 'react'

type Props = {
    search: (search: string) => Promise<string[]>
}

const PokemonList = (props: Props) => {
	const [pokemonNames, setPokemonNames] = useState<string[]>([])

	return <div>PokemonList</div>
}

export default PokemonList
