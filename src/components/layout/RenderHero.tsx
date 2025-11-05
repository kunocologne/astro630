import React from 'react'

import type { Page } from '@/types/payload-types'

import { HighImpactHero } from '@/components/layout/heros/HighImpact'
import { LowImpactHero } from '@/components/layout/heros/LowImpact'
import { MediumImpactHero } from '@/components/layout/heros/MediumImpact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
