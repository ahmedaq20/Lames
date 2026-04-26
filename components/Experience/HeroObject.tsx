'use client'

import { useRef, useMemo, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const outerRef = useRef<THREE.Mesh>(null!)
  const innerRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  
  // Custom uniforms for the shader morphing
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uDistortion: { value: 0.5 },
    uScroll: { value: 0 },
  }), [])

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    })

    // Morph the object as we scroll
    tl.to(uniforms.uScroll, { value: 1, ease: 'none' }, 0)
      .to(groupRef.current.position, { y: -2, ease: 'none' }, 0.2)
      .to(groupRef.current.rotation, { z: Math.PI, ease: 'none' }, 0.5)
      .to(groupRef.current.scale, { x: 0.5, y: 0.5, z: 0.5, ease: 'none' }, 0.8)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    uniforms.uTime.value = time
    
    // Smooth idle rotation
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.15
    
    outerRef.current.rotation.x = -time * 0.05
    outerRef.current.rotation.y = -time * 0.1
    
    // React to scroll progress
    const scrollVal = uniforms.uScroll.value
    meshRef.current.position.y = Math.sin(time + scrollVal * 10) * 0.05
  })

  return (
    <group ref={groupRef}>
      {/* Inner Core - Tech/Glossy */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={32}
          resolution={512}
          transmission={1}
          roughness={0.05}
          thickness={1}
          ior={1.2}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#ffffff"
          attenuationDistance={1}
          attenuationColor="#ffffff"
        />
      </mesh>

      {/* Gold Ring - Tech/Organic Hybrid */}
      <mesh ref={outerRef} scale={1.3}>
        <torusKnotGeometry args={[1.5, 0.02, 300, 40, 2, 3]} />
        <meshPhysicalMaterial 
          color="#d4af37" 
          metalness={1}
          roughness={0.15}
          emissive="#d4af37"
          emissiveIntensity={0.05}
          clearcoat={1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Silver Accents */}
      <mesh ref={innerRef} scale={1.15} rotation={[Math.PI / 4, 0, 0]}>
        <torusKnotGeometry args={[1.4, 0.01, 200, 20, 3, 5]} />
        <meshPhysicalMaterial 
          color="#f0f0f0" 
          metalness={1}
          roughness={0.02}
          envMapIntensity={3}
        />
      </mesh>

      <Sparkles 
        count={60} 
        scale={6} 
        size={2} 
        speed={0.3} 
        opacity={0.3} 
        color="#d4af37" 
      />
    </group>
  )
}
