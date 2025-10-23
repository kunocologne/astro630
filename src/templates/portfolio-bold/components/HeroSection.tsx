'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Star, Users } from 'lucide-react'
import Image from 'next/image'
import {
  FadeInLeft,
  FadeInRight,
  FloatingElement,
  HoverScale,
  StaggerContainer,
  StaggerItem,
} from './AnimatedComponents'

interface HeroSectionProps {
  companyName: string
  tagline: string
}

export function HeroSection({ companyName, tagline }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInLeft delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Badge variant="secondary" className="w-fit">
                    Creative Professional
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-5xl leading-tight font-bold text-gray-900 lg:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {companyName}
                </motion.h1>
                <motion.p
                  className="text-xl leading-relaxed text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {tagline}
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <HoverScale>
                  <Button size="lg" className="w-fit bg-blue-600 text-white hover:bg-blue-700">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </HoverScale>
                <HoverScale>
                  <Button variant="outline" size="lg" className="w-fit">
                    Get In Touch
                  </Button>
                </HoverScale>
              </motion.div>
              <motion.div
                className="flex items-center space-x-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <StaggerContainer delay={0.1}>
                  <StaggerItem>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Star className="h-5 w-5 fill-current text-yellow-500" />
                      </motion.div>
                      <span className="text-muted-foreground text-sm">5.0 Rating</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center space-x-2">
                      <Users className="text-primary h-5 w-5" />
                      <span className="text-muted-foreground text-sm">50+ Projects</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center space-x-2">
                      <Award className="text-primary h-5 w-5" />
                      <span className="text-muted-foreground text-sm">3 Awards</span>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </motion.div>
            </div>
          </FadeInLeft>
          <FadeInRight delay={0.4}>
            <div className="relative">
              <motion.div
                className="from-primary/20 to-secondary/20 relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <Image
                  src="/media/portfolio-hero.jpg"
                  alt="Portfolio Hero"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <FloatingElement intensity={0.3} speed={3}>
                <div className="bg-primary absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-20"></div>
              </FloatingElement>
              <FloatingElement intensity={0.5} speed={2.5}>
                <div className="bg-secondary absolute -top-6 -left-6 h-16 w-16 rounded-full opacity-30"></div>
              </FloatingElement>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
