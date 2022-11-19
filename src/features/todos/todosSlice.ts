import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidV4 } from 'uuid'

export interface Todo {
	id: string
	description: string
	checked: boolean
}

// *Define a type for the slice state
interface TodosState {
	todos: Todo[]
	isError: boolean
	isLoading: boolean
	isSuccess: boolean
	msg: string
}

const todos: Todo[] | null = JSON.parse(localStorage.getItem('todos') as string)

// *Define the initial state using that type
const initialState: TodosState = {
	todos: todos ? todos : [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	msg: '',
}

export const counterSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo: Todo = {
				id: uuidV4(),
				description: action.payload,
				checked: false,
			}
			state.todos.push(newTodo)
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
		completeTodo: (state, action: PayloadAction<string>) => {
			state.todos.map(todo => {
				if (todo.id === action.payload) todo.checked = !todo.checked
			})
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			const todos = state.todos.filter(todo => todo.id !== action.payload)

			state.todos = todos

			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
	},
})

export const { addTodo, completeTodo, deleteTodo } = counterSlice.actions
export default counterSlice.reducer
