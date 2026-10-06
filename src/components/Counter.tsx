import { memo } from 'react'
import type { CounterProps } from '../types/components'

export const Counter = memo(function Counter({
  count,
  onIncrement,
}: CounterProps) {
  console.log('[Counter] render')

  return (
    <div className="counter-block">
      <p>
        Лічильник (не пов'язаний зі списком товарів): <strong>{count}</strong>
      </p>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
    </div>
  )
})
