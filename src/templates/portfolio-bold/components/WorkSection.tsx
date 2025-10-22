'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeInUp, StaggerContainer, StaggerItem } from './AnimatedComponents'

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUp delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my best projects and creative solutions
            </p>
          </div>
        </FadeInUp>
        
        <StaggerContainer delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Featured Project */}
            <StaggerItem delay={0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="lg:col-span-2 lg:row-span-2 group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/media/project-1.jpg"
                        alt="Featured Project"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge className="mb-2">Featured</Badge>
                      <h3 className="text-xl font-semibold">E-commerce Platform</h3>
                      <p className="text-sm opacity-90">Modern shopping experience</p>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      A comprehensive e-commerce solution with modern design and seamless user experience.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            {/* Medium Project */}
            <StaggerItem delay={0.2}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/media/project-2.jpg"
                        alt="Project 2"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">Mobile App</h3>
                      <p className="text-sm opacity-90">iOS & Android</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>

            {/* Small Project */}
            <StaggerItem delay={0.3}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/media/project-3.jpg"
                        alt="Project 3"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">Brand Identity</h3>
                      <p className="text-sm opacity-90">Logo & Guidelines</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>

            {/* Medium Project */}
            <StaggerItem delay={0.4}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/media/project-4.jpg"
                        alt="Project 4"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">Web Design</h3>
                      <p className="text-sm opacity-90">Corporate Website</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>

            {/* Small Project */}
            <StaggerItem delay={0.5}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/media/project-5.jpg"
                        alt="Project 5"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">UI/UX Design</h3>
                      <p className="text-sm opacity-90">SaaS Platform</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}