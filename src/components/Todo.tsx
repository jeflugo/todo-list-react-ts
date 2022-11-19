import { useAppDispatch } from '../app/hooks'
import {
	completeTodo,
	deleteTodo,
	Todo as ITodo,
} from '../features/todos/todosSlice'

interface TodoProps {
	todo: ITodo
}

const Todo = ({ todo }: TodoProps) => {
	const dispatch = useAppDispatch()

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<input
				type='checkbox'
				name='done'
				className='done'
				checked={todo.checked}
				onChange={e => dispatch(completeTodo(todo.id))}
			/>
			<h5 className='my-0 w-75'>{todo.description}</h5>
			<button
				className='btn btn-sm btn-danger delete'
				onClick={e => {
					dispatch(deleteTodo(todo.id))
				}}
			>
				Delete
			</button>
		</li>
	)
}

export default Todo
