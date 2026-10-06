import { useCallback, useMemo, useState } from 'react'
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

  // З useMemo: важка функція перераховується тільки коли змінюється
  // searchTerm. Зміна count (через Counter) більше не викликає перерахунок,
  // бо searchTerm у масиві залежностей не змінився.
  const visibleProducts = useMemo(
    () => filterAndSortProducts(PRODUCTS, searchTerm),
    [searchTerm],
  )

  // З useCallback: функція має стабільне посилання між рендерами, тому
  // React.memo на Counter бачить ті самі пропси і пропускає ререндер,
  // коли змінюється щось, що не стосується лічильника (напр. searchTerm).
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  // Те саме для ProductItem: стабільний onSelect + React.memo означають,
  // що при кліку на "+1" елементи списку більше не перерендеряться.
  const handleSelect = useCallback((id: number) => {
    setSelectedId(id)
  }, [])

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