import { useEffect, useRef, useState } from 'react'

export function UseRefInput() {
  const [value, setValue] = useState('')
  const previousValueRef = useRef('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    previousValueRef.current = value
  }, [value])

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <section className="task-card">
      <h2>1.4 useRef: фокус и предыдущее значение</h2>

      <label className="field">
        <span>Введите текст</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Например: React"
        />
      </label>

      <p>Текущее значение: {value || 'пусто'}</p>
      <p>Предыдущее значение: {previousValueRef.current || 'пусто'}</p>

      <div className="button-row">
        <button type="button" onClick={focusInput}>
          Поставить фокус в input
        </button>
      </div>
    </section>
  )
}
