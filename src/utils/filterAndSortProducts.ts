import type { Product } from '../types/models'

// Штучне навантаження, що імітує "важке" обчислення (наприклад, складну
// бізнес-логіку чи обробку великого набору даних), щоб ефект мемоізації
// був помітний на око, а не лише в мілісекундах у консолі.
function simulateHeavyWork(): void {
  let total = 0
  for (let i = 0; i < 5_000_000; i++) {
    total += Math.sqrt(i)
  }
  void total
}

export function filterAndSortProducts(
  products: Product[],
  searchTerm: string,
): Product[] {
  console.log('[filterAndSortProducts] обчислення запущено...')
  const start = performance.now()

  simulateHeavyWork()

  const normalizedTerm = searchTerm.trim().toLowerCase()
  const filtered = normalizedTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(normalizedTerm),
      )
    : products

  const sorted = [...filtered].sort((a, b) => a.price - b.price)

  const duration = (performance.now() - start).toFixed(1)
  console.log(`[filterAndSortProducts] завершено за ${duration} мс`)

  return sorted
}