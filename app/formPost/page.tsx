import { revalidatePath } from 'next/cache'
import AddButton from './addButton'

const todos: string[] = ['Impala']

const FormPostPage = () => {
	const addTodo = async (todo: string) => {
		'use server'

		await new Promise((resolve) => setTimeout(resolve, 3000))

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
			<div>
				
				<AddButton addTodo={addTodo} />
			</div>
		</main>
	)
}

export default FormPostPage
