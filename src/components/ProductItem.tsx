import type { FC } from 'react'
import type { ProductItemProps } from '../types/components'

export const ProductItem: FC<ProductItemProps> = ({
  product,
  isSelected,
  onSelect,
}) => {
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
}