import { useState } from 'react'

interface CounterProps {
  name: string
}

function Counter({ name }: CounterProps) {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="counter-controls">
        <button onClick={() => setCount((count) => count - 2)}>-2</button>
        <span>count is {count}</span>
        <button onClick={() => setCount((count) => count + 2)}>+2</button>
      </div>
    </div>
  )
}

export default Counter 