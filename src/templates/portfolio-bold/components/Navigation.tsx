'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FadeInLeft, FadeInRight } from './AnimatedComponents'

interface NavigationProps {
  companyName: string
}

export function Navigation({ companyName }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <FadeInLeft delay={0.2}>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">{companyName}</span>
            </div>
          </FadeInLeft>
          <FadeInRight delay={0.4}>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <motion.a
                  href="#home"
                  className="text-gray-900 transition-colors hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#about"
                  className="text-gray-900 transition-colors hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#work"
                  className="text-gray-900 transition-colors hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Work
                </motion.a>
                <motion.a
                  href="#testimonials"
                  className="text-gray-900 transition-colors hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Testimonials
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-gray-900 transition-colors hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </FadeInRight>
          <FadeInRight delay={0.6}>
            <Button className="md:hidden">Menu</Button>
          </FadeInRight>
        </div>
      </div>
    </motion.nav>
  )
}
