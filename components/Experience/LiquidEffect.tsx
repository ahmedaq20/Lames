'use client'

import React, { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Effect } from 'postprocessing'
import * as THREE from 'three'

const fragmentShader = `
  uniform float uTime;
  uniform float uScrollSpeed;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 displacedUv = uv;
    
    // Create a liquid distortion based on scroll speed
    float strength = uScrollSpeed * 0.05;
    float noise = sin(uv.y * 10.0 + uTime * 2.0) * cos(uv.x * 10.0 + uTime * 2.0);
    
    displacedUv.x += noise * strength;
    displacedUv.y += noise * strength;

    vec4 color = texture2D(inputBuffer, displacedUv);
    
    // Add a slight RGB split based on scroll speed
    float split = uScrollSpeed * 0.01;
    color.r = texture2D(inputBuffer, displacedUv + vec2(split, 0.0)).r;
    color.b = texture2D(inputBuffer, displacedUv - vec2(split, 0.0)).b;

    outputColor = color;
  }
`

class LiquidEffectImpl extends Effect {
  constructor() {
    super('LiquidEffect', fragmentShader, {
      uniforms: new Map([
        ['uTime', new THREE.Uniform(0)],
        ['uScrollSpeed', new THREE.Uniform(0)],
      ]),
    })
  }

  update(renderer: any, inputBuffer: any, deltaTime: any) {
    const uTime = this.uniforms.get('uTime')
    if (uTime) uTime.value += deltaTime
  }
}

export const LiquidEffect = React.forwardRef(({ scrollSpeed = 0 }: { scrollSpeed?: number }, ref) => {
  const effect = useMemo(() => new LiquidEffectImpl(), [])
  
  useFrame(() => {
    const uScrollSpeed = effect.uniforms.get('uScrollSpeed')
    if (uScrollSpeed) {
      // Smoothly approach the current scroll speed
      uScrollSpeed.value = THREE.MathUtils.lerp(uScrollSpeed.value, scrollSpeed, 0.1)
    }
  })

  return <primitive ref={ref} object={effect} dispose={null} />
})

LiquidEffect.displayName = 'LiquidEffect'
