'use client'

import React from 'react'
import { TextInput } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'

export const SlugComponent: TextFieldClientComponent = (props) => {
  return <TextInput {...props} />
}
