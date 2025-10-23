'use client'

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { ReactNode, useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * AnimatedSphere Component
 * 3D animated sphere with distortion
 */
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}

/**
 * FloatingParticles3D Component
 * 3D floating particles using Three.js
 */
function FloatingParticles3D({ count = 100 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    if (!meshRef.current) return

    const temp = new THREE.Object3D()
    const positions = []

    for (let i = 0; i < count; i++) {
      positions.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        scale: Math.random() * 0.5 + 0.5
      })
    }

    positions.forEach((pos, i) => {
      temp.position.set(pos.x, pos.y, pos.z)
      temp.scale.setScalar(pos.scale)
      temp.updateMatrix()
      meshRef.current!.setMatrixAt(i, temp.matrix)
    })

    meshRef.current!.instanceMatrix.needsUpdate = true
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#8b5cf6" />
    </instancedMesh>
  )
}

/**
 * ThreeScene Component
 * 3D scene with animated elements
 */
export function ThreeScene({ 
  children, 
  className = '' 
}: { 
  children?: ReactNode
  className?: string 
}) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <FloatingParticles3D count={50} />
        {children}
      </Canvas>
    </div>
  )
}

/**
 * ThreeBackground Component
 * 3D background for hero sections
 */
export function ThreeBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedSphere />
        <FloatingParticles3D count={30} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

/**
 * MorphingShape Component
 * 3D morphing shape animation
 */
function MorphingShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
      />
    </mesh>
  )
}

/**
 * ThreeMorphingBackground Component
 * 3D morphing background
 */
export function ThreeMorphingBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <MorphingShape />
        <FloatingParticles3D count={40} />
      </Canvas>
    </div>
  )
}
