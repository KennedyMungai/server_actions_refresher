import { revalidatePath } from 'next/cache'
import AddButton from './addButton'

const todos: string[] = ['Impala']

const FormPostPage = () => {
	const addTodo = async (data: FormData) => {
		'use server'

		await new Promise((resolve) => setTimeout(resolve, 3000))

		const todo = data.get('todo') as string

		todos.push(todo)

		revalidatePath('/')
	}

	return (
		<main className='min-h-screen p-24'>
			<h1 className='text-4xl font-bold'>Todos</h1>
			<ul>
				{todos.map((todo, index) => {
					return <li key={index}>{todo}</li>
				})}
			</ul>
			<form action={addTodo}>
				<input
					type='text'
					name='todo'
					className='border border-gray-300 rounded-lg py-4 px-4 text-base text-black'
				/>
				<AddButton />
			</form>
		</main>
	)
}

export default FormPostPage
