import React from 'react'
import { TodoType } from './types'
import { useDeleteTodoMutation } from './todosSlice'

const Todo = ({ todo }: { todo: TodoType }): JSX.Element => {
  const [deleteTodo] = useDeleteTodoMutation()
  const handleTodoDelete = async () => {
    try {
      await deleteTodo(todo).unwrap()
    } catch (err) {
      console.error('Failed to delete the post', err)
    }
  }

  return (
    <div>
      {todo.id} {todo.title} {todo.completed}
      <button onClick={handleTodoDelete}>Delete Todo</button>
    </div>
  )
}

export default Todo
