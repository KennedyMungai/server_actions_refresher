'use client'
import React from 'react'

type Props = {}

const AddButton = (props: Props) => {
	return (
		<button
			type='submit'
			className='bg-blue-600 disabled:bg-gray-500 inline-flex rounded-md p-2 ml-3'
		>
			Submit
		</button>
	)
}

export default AddButton
