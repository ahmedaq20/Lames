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
        containerStyles={{ background: '#000', zIndex: 9999 }}
        innerStyles={{ width: '12rem', height: '4px', background: 'rgba(255,255,255,0.2)' }}
        barStyles={{ height: '100%', background: '#fff', boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        dataStyles={{ color: '#fff', marginTop: '1rem', fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        dataInterpolation={(p) => `Experience Loading ${p.toFixed(0)}%`}
      />
    </div>
  )
}
