import type { FC } from 'react'
import type { CounterProps } from '../types/components'

export const Counter: FC<CounterProps> = ({ count, onIncrement }) => {
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
}