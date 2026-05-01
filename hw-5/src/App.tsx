import './App.css'
import { UseCallbackCounter } from './tasks/UseCallbackCounter'
import { UseContextTheme } from './tasks/UseContextTheme'
import { UseMemoNumbers } from './tasks/UseMemoNumbers'
import { UseReducerTodos } from './tasks/UseReducerTodos'
import { UseRefInput } from './tasks/UseRefInput'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">Домашнее задание #5</p>
        <h1>React hooks, forms and validation</h1>
        <p>
          Каждый блок ниже соответствует отдельному пункту задания и находится в
          отдельном файле внутри <code>src/tasks</code>.
        </p>
      </header>

      <div className="tasks-list">
        <UseContextTheme />
        <UseCallbackCounter />
        <UseMemoNumbers />
        <UseRefInput />
        <UseReducerTodos />
      </div>
    </main>
  )
}

export default App
