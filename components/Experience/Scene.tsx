'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { 
  Environment, 
  Float, 
  PerspectiveCamera,
  ContactShadows,
  Center
} from '@react-three/drei'
import { useRef, useEffect, useLayoutEffect } from 'react'
import * as THREE from 'three'
import HeroObject from './HeroObject'
import { EffectComposer, Bloom, Noise, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { LiquidEffect } from './LiquidEffect'

export default function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const scrollSpeedRef = useRef(0)
  const lastScrollPos = useRef(0)
  const { scene } = useThree()

  useFrame((state, delta) => {
    // Calculate scroll speed for shaders
    const currentScroll = window.scrollY
    const speed = Math.abs(currentScroll - lastScrollPos.current) / delta / 1000
    scrollSpeedRef.current = THREE.MathUtils.lerp(scrollSpeedRef.current, speed, 0.1)
    lastScrollPos.current = currentScroll
  })

  useLayoutEffect(() => {
    // Initial camera position
    if (!cameraRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'main', // Target the main element
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    // Cinematic Camera Sequence
    tl.to(cameraRef.current.position, { x: 5, y: 2, z: 12, ease: "none" }, 0) // Pan/Dolly during first sections
      .to(cameraRef.current.rotation, { y: Math.PI * 0.2, ease: "none" }, 0)
      
      .to(cameraRef.current.position, { x: -5, y: -2, z: 8, ease: "none" }, 0.5) // Change angle for middle sections
      
      .to(cameraRef.current.position, { x: 0, y: 0, z: 6, ease: "none" }, 1) // Move back for footer

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
  
  return (
    <>
      <color attach="background" args={['#030303']} />
      
      <PerspectiveCamera 
        ref={cameraRef}
        makeDefault 
        position={[0, 0, 8]} 
        fov={35} 
      />
      
      <group ref={groupRef}>
        <Center top position={[0, -0.5, 0]}>
          <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
          >
            <HeroObject />
          </Float>
        </Center>
      </group>

      {/* Enhanced Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[10, -10, 10]} intensity={2} color="#d4af37" />
      <spotLight 
        position={[0, 15, 0]} 
        intensity={3} 
        angle={0.4} 
        penumbra={1} 
        castShadow 
      />

      <ContactShadows 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]} 
        opacity={0.6} 
        width={20} 
        height={20} 
        blur={2} 
        far={2} 
      />

      <Environment preset="city" />

      {/* Post Processing */}
      <EffectComposer enableNormalPass={false}>
        <LiquidEffect scrollSpeed={scrollSpeedRef.current} />
        <Bloom 
          luminanceThreshold={1.1} 
          mipmapBlur 
          intensity={0.5} 
          radius={0.4}
        />
        <Noise 
          premultiply 
          blendFunction={BlendFunction.SOFT_LIGHT} 
          opacity={0.05} 
        />
        <ChromaticAberration 
          blendFunction={BlendFunction.NORMAL} 
          offset={new THREE.Vector2(0.0005, 0.0005)} 
        />
      </EffectComposer>
    </>
  )
}
