const todos: string[] = []

export default function Home() {
	return (
		<main className='min-h-screen p-24'>
			<h1 className='text-4xl font-bold'>Todos</h1>
			<ul>
				{todos.map((todo, index) => {
					return <li key={index}>{todo}</li>
				})}
			</ul>
		</main>
	)
}
