import { useMemo, useState } from 'react'

function createRandomNumbers() {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
}

export function UseMemoNumbers() {
  const [numbers, setNumbers] = useState(() => createRandomNumbers())
  const [clicks, setClicks] = useState(0)

  const sum = useMemo(() => {
    console.log('Calculate sum')

    return numbers.reduce((total, number) => total + number, 0)
  }, [numbers])

  function generateNumbers() {
    setNumbers(createRandomNumbers())
  }

  return (
    <section className="task-card">
      <h2>1.3 useMemo: сумма чисел</h2>

      <p className="task-label">Сумма: {sum}</p>
      <p>Другой state: {clicks}</p>

      <div className="number-list">
        {numbers.map((number, index) => (
          <span key={`${number}-${index}`}>{number}</span>
        ))}
      </div>

      <div className="button-row">
        <button type="button" onClick={generateNumbers}>
          Сгенерировать новый массив
        </button>

        <button
          type="button"
          onClick={() => setClicks((currentClicks) => currentClicks + 1)}
        >
          Изменить другой state
        </button>
      </div>

      <p className="note">
        Открой Console. Сумма пересчитывается только при изменении массива
        numbers, а не при изменении другого state.
      </p>
    </section>
  )
}
