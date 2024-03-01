'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const AddButton = (props: Props) => {
	const { pending } = useFormStatus()

	return (
		<button
			type='submit'
            disabled={pending}
			className='bg-blue-600 disabled:bg-gray-500 inline-flex rounded-md p-2 ml-3'
		>
			Submit
		</button>
	)
}

export default AddButton
