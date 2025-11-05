'use client'

import React from 'react'

interface SearchProps {
  className?: string
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={`search-component ${className || ''}`}>
      <input type="text" placeholder="Search products..." className="w-full rounded border p-2" />
      {/* TODO: Implement search functionality */}
    </div>
  )
}
