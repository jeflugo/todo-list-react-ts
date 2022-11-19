import { useAppSelector } from '../app/hooks'
import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = () => {
	const { todos } = useAppSelector(state => state.todos)

	return (
		<ul className={`${style.size} list-group`}>
			{todos.length > 0 ? (
				todos.map(todo => <Todo key={todo.id} todo={todo} />)
			) : (
				<h4>No Todos yet</h4>
			)}
		</ul>
	)
}

export default TodoList
