import { memo } from 'react'
import type { ProductItemProps } from '../types/components'

export const ProductItem = memo(function ProductItem({
  product,
  isSelected,
  onSelect,
}: ProductItemProps) {
  console.log(`[ProductItem] render: ${product.name}`)

  return (
    <li
      className={isSelected ? 'product-item selected' : 'product-item'}
      onClick={() => onSelect(product.id)}
    >
      <span className="product-name">{product.name}</span>
      <span className="product-category">{product.category}</span>
      <span className="product-price">{product.price} грн</span>
    </li>
  )
})
