import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTodo, deleteTodo } from '../Slice/TodoSlice'

function ToDoList() {
	const [valueTodo, setValueTodo] = useState('')
	const dispatch = useDispatch()
	const DateList = useSelector((state) => state.AddTodo.todo)
	const ColorSet = useSelector((state) => state.AddTodo.color)
	console.log(ColorSet)
	function handleClickAdd(e) {
		e.preventDefault()
		if (!valueTodo.trim()) return null
		const DateTodo = {
			tittle: valueTodo,
			id: Math.random().toString(),
		}

		dispatch(addTodo(DateTodo))
		setValueTodo('')
	}
	function handleClickDelete(id) {
		dispatch(deleteTodo(id))
	}
	return (
		<StyledContainer>
			<StyledForm onSubmit={handleClickAdd}>
				<StyledInput
					onChange={(e) => setValueTodo(e.target.value)}
					value={valueTodo}
				/>
			</StyledForm>
			{DateList.map((item) => {
				return (
					<StyledList key={item.id}>
						<StyledSpan ColorSet={ColorSet}>
							{item.tittle}
						</StyledSpan>
						<StyledButton
							onClick={() => handleClickDelete(item.id)}
						>
							Delete
						</StyledButton>
					</StyledList>
				)
			})}
		</StyledContainer>
	)
}

const StyledContainer = styled.div`
	width: 500px;
	height: 600px;
	margin-top: 20px;
	border: 3px solid black;
	background-color: greenyellow;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const StyledForm = styled.form`
	width: 350px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const StyledInput = styled.input`
	width: 300px;
	height: 40px;
	font-size: 20px;
	text-align: center;
	border-radius: 12px;
	background-color: white;
`
const StyledList = styled.div`
	width: 450px;
	height: 50px;
	border: 3px solid black;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: whitesmoke;
	margin-top: 10px;
`
const StyledButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: 8px;
	color: white;
	font-size: 15px;
	background-color: rgb(10, 215, 55);
	:hover {
		width: 105px;
		height: 35px;
		color: white;
		background-color: red;
	}
`
const StyledSpan = styled.span`
	padding: 5px 15px 5px 15px;
	border: 2px solid black;
`
export default ToDoList
