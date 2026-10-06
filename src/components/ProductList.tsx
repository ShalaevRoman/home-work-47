import type { FC } from 'react'
import type { ProductListProps } from '../types/components'
import { ProductItem } from './ProductItem'

export const ProductList: FC<ProductListProps> = ({
  products,
  selectedId,
  onSelect,
}) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isSelected={product.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}