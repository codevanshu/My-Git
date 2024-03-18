import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, removeTodo } from '../features/todoSlice'

function Todo() {
  const [newText, setNewText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleEdit = (id) => {
    setEditingId(id); // Set the id of the todo being edited
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setNewText(todoToEdit.text); // Set the current text of the todo being edited
    }
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editingId, newText: newText })); // Dispatch updateTodo action with id and newText
    setEditingId(null); // Reset editingId after update
    setNewText(''); // Reset newText after update
  };

  return (
    <>

      <div className='flex align-middle justify-center bg-gradient-to-r'>


        <div className=' mt-8 box-border w-2/4 bg-  justify-center border-black'>
          <div className='text-center  text-2xl  font-bold py-6 justify-center text-white'>My Todos</div>
          <ul className=" list-none">
            {todos.map((todo) => (
              <li key={todo.id}
                className=" justify-between align-middle px-4 py-2 "
              >
                <div className=' text-black bg-slate-300 border-2 relative w-full border-black justify-center'>
                  {editingId === todo.id ? (
                    <input
                      className=" bg-transparent justify-center outline-none px-4 py-4 "
                      type="text"
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                    />
                  ) : (
                    <div className=' justify-center px-4 py-4 '>
                      {todo.text}
                    </div>
                  )}


                  <button className="text-white absolute right-24 top-1.5 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>

                  
                  {editingId === todo.id ? (
                    <button className="text-white absolute right-1 top-1.5 bg-indigo-500 border-0  py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg" onClick={handleUpdate}>Save</button>
                  ) : (
                    <button className="text-white absolute right-1 top-1.5 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg" onClick={() => handleEdit(todo.id)}>Edit</button>

                  )}
                  
                </div>
                
              </li>


            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todo