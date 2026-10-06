import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { SearchInput } from './components/SearchInput'
import { ProductList } from './components/ProductList'
import { generateProducts } from './utils/generateProducts'
import { filterAndSortProducts } from './utils/filterAndSortProducts'

const PRODUCTS = generateProducts(2000)

function App() {
  const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // Без useMemo: ця "важка" функція виконується на КОЖЕН рендер App,
  // навіть коли змінюється лише count, який взагалі не впливає на список.
  const visibleProducts = filterAndSortProducts(PRODUCTS, searchTerm)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }

  // Без useCallback: нова функція створюється на кожен рендер,
  // через що React.memo (додамо пізніше) не зможе зберегти дочірні елементи.
  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  return (
    <div className="app">
      <h1>Оптимізація React через мемоізацію</h1>

      <Counter count={count} onIncrement={handleIncrement} />

      <SearchInput value={searchTerm} onChange={setSearchTerm} />

      <p className="hint">
        Товарів знайдено: {visibleProducts.length}. Відкрий консоль
        розробника — там видно, коли перераховується список і коли
        перерендерюються елементи.
      </p>

      <ProductList
        products={visibleProducts}
        selectedId={selectedId}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default App