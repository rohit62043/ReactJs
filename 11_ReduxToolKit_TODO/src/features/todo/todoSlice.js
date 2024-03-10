import { createSlice, nanoid } from '@reduxjs/toolkit'

//Creating initial state
const initialState = {
    //Ye hi state hai
    todos: [
        {
            id: 1,
            text: "Hello World!"
        },
    ]
}

//Creating Slice and Exporting it (Exporting is done in two phase)

//We can have multiple Slices
export const todoSlice = createSlice({
    //yahi name chrome extension me dikhega
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

//we need to export different reducer as we can change and updarte state using only reducer so we need them in different components

export const { addTodo, removeTodo } = todoSlice.actions

//we need to export different reducers so that  store has ide of Knowledge of the reducers

export default todoSlice.reducer

//Note: 1) addTodo from this we will learn how to use dispatcher(useDispatch)
// 2) List Down todos from this we will learn how to use useSelector