'use client'

import React from 'react'

interface RichTextProps {
  content?: any
  data?: any
  className?: string
  enableGutter?: boolean
  enableProse?: boolean
}

export const RichText: React.FC<RichTextProps> = ({ content, data, className = '', enableGutter, enableProse }) => {
  if (!content) {
    return null
  }

  // Simple rich text renderer
  const renderContent = (content: any) => {
    if (typeof content === 'string') {
      return <p className="text-foreground">{content}</p>
    }

    if (Array.isArray(content)) {
      return (
        <div className="space-y-4">
          {content.map((item, index) => (
            <div key={index}>
              {renderContent(item)}
            </div>
          ))}
        </div>
      )
    }

    if (content && typeof content === 'object') {
      // Handle different content types
      if (content.type === 'paragraph') {
        return (
          <p className="text-foreground leading-relaxed">
            {content.children?.map((child: any, index: number) => 
              child.text || ''
            ).join('')}
          </p>
        )
      }

      if (content.type === 'heading') {
        const HeadingTag = `h${content.level || 2}` as keyof JSX.IntrinsicElements
        return (
          <HeadingTag className="text-foreground font-semibold">
            {content.children?.map((child: any, index: number) => 
              child.text || ''
            ).join('')}
          </HeadingTag>
        )
      }

      if (content.type === 'list') {
        const ListTag = content.listType === 'ordered' ? 'ol' : 'ul'
        return (
          <ListTag className="list-disc list-inside space-y-2">
            {content.children?.map((item: any, index: number) => (
              <li key={index} className="text-foreground">
                {renderContent(item)}
              </li>
            ))}
          </ListTag>
        )
      }

      if (content.children) {
        return (
          <div>
            {content.children.map((child: any, index: number) => (
              <div key={index}>
                {renderContent(child)}
              </div>
            ))}
          </div>
        )
      }
    }

    return null
  }

  return (
    <div className={`rich-text ${className}`}>
      {renderContent(content)}
    </div>
  )
}
