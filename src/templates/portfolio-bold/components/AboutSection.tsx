'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeInLeft, FadeInRight, FadeInUp } from './AnimatedComponents'

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInUp delay={0.2}>
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Passionate creative professional with a focus on delivering exceptional results
            </p>
          </div>
        </FadeInUp>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInLeft delay={0.4}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-foreground text-2xl font-semibold">My Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in creative design, I specialize in creating
                  beautiful, functional, and user-centered digital experiences. My passion lies in
                  transforming complex ideas into simple, elegant solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of good design to solve problems and create meaningful
                  connections between brands and their audiences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">50+</div>
                      <div className="text-muted-foreground text-sm">Projects Completed</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">3</div>
                      <div className="text-muted-foreground text-sm">Years Experience</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">100%</div>
                      <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-primary mb-2 text-3xl font-bold">24/7</div>
                      <div className="text-muted-foreground text-sm">Support Available</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </FadeInLeft>

          <FadeInRight delay={0.6}>
            <div className="relative">
              <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/media/about-portrait.jpg"
                  alt="About Portrait"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
