import { useReducer, useState } from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }

const initialTodos: Todo[] = [
  { id: 1, text: 'Изучить useReducer', completed: false },
  { id: 2, text: 'Сделать список задач', completed: true },
]

function todosReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }

      return [...state, newTodo]
    }

    case 'TOGGLE_TODO': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }

    case 'DELETE_TODO': {
      return state.filter((todo) => todo.id !== action.payload)
    }

    default: {
      return state
    }
  }
}

export function UseReducerTodos() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos)
  const [todoText, setTodoText] = useState('')

  function addTodo() {
    const trimmedText = todoText.trim()

    if (!trimmedText) {
      return
    }

    dispatch({ type: 'ADD_TODO', payload: trimmedText })
    setTodoText('')
  }

  return (
    <section className="task-card">
      <h2>1.5 useReducer: todo list</h2>

      <div className="inline-form">
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          placeholder="Новая задача"
        />
        <button type="button" onClick={addTodo}>
          Добавить
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                }
              />
              <span className={todo.completed ? 'todo-completed' : ''}>
                {todo.text}
              </span>
            </label>

            <button
              type="button"
              onClick={() =>
                dispatch({ type: 'DELETE_TODO', payload: todo.id })
              }
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
