'use client'

import React from 'react'

interface FilterListProps {
  list: any[]
  title: string
}

export const FilterList: React.FC<FilterListProps> = ({ list, title }) => {
  return (
    <div className="filter-list">
      <h3>{title}</h3>
      {/* TODO: Implement filter functionality */}
    </div>
  )
}
