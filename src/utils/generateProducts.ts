import type { Product } from '../types/models'

const CATEGORIES = ['Electronics', 'Books', 'Clothing', 'Toys', 'Food']

export function generateProducts(count: number): Product[] {
  const products: Product[] = []

  for (let i = 0; i < count; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      category: CATEGORIES[i % CATEGORIES.length],
      price: Math.round((((i * 37) % 500) + 1) * 1.25),
    })
  }

  return products
}