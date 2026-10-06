import type { FC } from 'react'
import type { SearchInputProps } from '../types/components'

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Пошук товару за назвою..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}