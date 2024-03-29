import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandle = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')

  }
  return (
    <>
    <form className='flex align-middle justify-center' onSubmit={addTodoHandle}>
      <input type="text" 
      className="bg-gray-800 rounded border border-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder='Enter Today Task'
      value={input}
      onChange={(e) => setInput(e.target.value)}/>
      <button 
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      type='submit'>Add Todo</button>
    </form>
    </>
  )
}

export default AddTodo