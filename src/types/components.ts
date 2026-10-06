import type { Product } from './models'

export interface CounterProps {
  count: number
  onIncrement: () => void
}

export interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export interface ProductListProps {
  products: Product[]
  selectedId: number | null
  onSelect: (id: number) => void
}

export interface ProductItemProps {
  product: Product
  isSelected: boolean
  onSelect: (id: number) => void
}