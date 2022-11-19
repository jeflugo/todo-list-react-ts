import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todos/todosSlice'
import style from './TodoForm.module.css'

const TodoForm = () => {
	const [text, setText] = useState('')

	const dispatch = useAppDispatch()

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (text) {
			dispatch(addTodo(text))
		}

		setText(prev => '')
	}

	return (
		<section className={`${style.size} d-flex align-items-center`}>
			<form
				className={`${style.form} d-flex justify-content-between `}
				onSubmit={onSubmit}
			>
				<div className='form-group w-75'>
					<input
						type='text'
						className='form-control'
						placeholder='What do you you want to do?'
						value={text}
						onChange={e => setText(prev => e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-success'>
					Add Todo
				</button>
			</form>
		</section>
	)
}

export default TodoForm
