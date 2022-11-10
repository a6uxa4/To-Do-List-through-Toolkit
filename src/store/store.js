import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../Slice/TodoSlice'

const store = configureStore({
	reducer: {
		AddTodo: TodoSlice,
	},
})

export default store
