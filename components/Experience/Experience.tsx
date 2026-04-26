'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './Scene'
import { Loader } from '@react-three/drei'

export default function Experience() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ 
          antialias: true, 
          alpha: true, 
          stencil: false, 
          depth: true,
          powerPreference: "high-performance" 
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Loader 
        containerClassName="bg-black flex items-center justify-center z-[9999]"
        innerClassName="w-48 h-1 bg-white/20 relative"
        barClassName="h-full bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        dataInterpolation={(p) => `Experience Loading ${p.toFixed(0)}%`}
        dataClassName="text-white mt-4 font-sans text-sm tracking-[0.2em] uppercase"
      />
    </div>
  )
}
