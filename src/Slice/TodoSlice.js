import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todo: [],
}

const ToDoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todo.push(action.payload)
		},
		deleteTodo(state, action) {
			state.todo = state.todo.filter(
				(element) => element.id !== action.payload,
			)
		},
	},
})

export const { addTodo, deleteTodo } = ToDoSlice.actions

export default ToDoSlice.reducer
