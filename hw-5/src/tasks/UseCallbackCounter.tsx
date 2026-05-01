import { memo, useCallback, useState } from 'react'

type CounterButtonProps = {
  title: string
  onClick: () => void
}

const CounterButton = memo(function CounterButton({
  title,
  onClick,
}: CounterButtonProps) {
  console.log(`Render child: ${title}`)

  return (
    <button type="button" onClick={onClick}>
      {title}
    </button>
  )
})

export function UseCallbackCounter() {
  const [count, setCount] = useState(0)
  const [otherCount, setOtherCount] = useState(0)

  function incrementWithoutCallback() {
    setCount((currentCount) => currentCount + 1)
  }

  const incrementWithCallback = useCallback(() => {
    setCount((currentCount) => currentCount + 1)
  }, [])

  return (
    <section className="task-card">
      <h2>1.2 useCallback: обработчики</h2>

      <p className="task-label">Основной счётчик: {count}</p>
      <p className="task-label">Дополнительный счётчик: {otherCount}</p>

      <div className="button-row">
        <CounterButton
          title="Без useCallback"
          onClick={incrementWithoutCallback}
        />

        <CounterButton
          title="С useCallback"
          onClick={incrementWithCallback}
        />

        <button
          type="button"
          onClick={() => setOtherCount((currentCount) => currentCount + 1)}
        >
          Изменить другой state
        </button>
      </div>

      <p className="note">
        Открой Console в DevTools. При изменении другого state кнопка без
        useCallback получает новую функцию и ререндерится, а кнопка с
        useCallback сохраняет тот же обработчик.
      </p>
    </section>
  )
}
