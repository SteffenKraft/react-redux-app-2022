import React from 'react'
import { useGetTodosQuery, useAddNewTodoMutation } from './todosSlice'
import Todo from './Todo'

const Todos = (): JSX.Element => {
  const { data: todos, isLoading: isLoadingTodos } = useGetTodosQuery()
  const [addNewTodo] = useAddNewTodoMutation()

  if (isLoadingTodos) {
    return <div>Loading</div>
  }

  if (!todos) {
    return <div>No posts</div>
  }

  return (
    <div>
      <button
        onClick={() =>
          addNewTodo({
            title: 'New ToDoooooo',
            completed: true,
          })
        }
      >
        Add Todo
      </button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default Todos
