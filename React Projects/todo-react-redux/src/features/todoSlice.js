import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addTodo : (state, action) => {
        const todo = {id: nanoid(), 
            text: action.payload} 

            state.todos.push(todo)
    },

    updateTodo: (state, action) => {
        const { id, newText } = action.payload;
        const todoupdate = state.todos.find((todo) => todo.id == id)

        if(todoupdate){
            todoupdate.text = newText
        }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer