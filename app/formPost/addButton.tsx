'use client'
import React, { useRef, useTransition } from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
	addTodo: (todo: string) => {}
}

const AddButton = ({ addTodo }: Props) => {
	const [pending, startTransition] = useTransition()

	const todoRef = useRef<HTMLInputElement>()

	return (
		<div>
			<input
				ref={todoRef}
				type='text'
				name='todo'
				className='border border-gray-300 rounded-lg py-4 px-4 text-base text-black'
			/>
			<button
				type='submit'
				disabled={pending}
				onClick={async () => {
					startTransition(async () => {
						await addTodo(todoRef.current!.value)
					})
				}}
				className='bg-blue-600 disabled:bg-gray-500 inline-flex rounded-md p-2 ml-3'
			>
				Submit
			</button>
		</div>
	)
}

export default AddButton
