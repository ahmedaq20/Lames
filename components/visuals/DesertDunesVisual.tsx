'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface DesertDunesVisualProps {
  className?: string
  intensity?: 'subtle' | 'full'
}

export default function DesertDunesVisual({
  className = '',
  intensity = 'full',
}: DesertDunesVisualProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Photorealistic Cinematic Desert Backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: intensity === 'full' ? 0.7 : 0.45, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/arabic-hero-desert-v2.jpg"
            alt="Arabian Desert Caravan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center contrast-[1.05]"
          />
          {/* Subtle Cyber Color Grading Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030509] via-transparent to-[#030509]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030509]/40 via-transparent to-[#030509]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_45%,rgba(3,5,9,0.35),transparent_80%)]" />
        </div>
      </motion.div>

      {/* 2. Deep Arabian Night Starlight Shimmer */}
      <div className="absolute inset-0 z-10">
        {[
          { top: '10%', left: '22%', size: 2.5, delay: 0, duration: 4 },
          { top: '18%', left: '72%', size: 3, delay: 1.2, duration: 5 },
          { top: '6%', left: '85%', size: 2, delay: 0.5, duration: 3.5 },
          { top: '28%', left: '34%', size: 2.5, delay: 2, duration: 4.5 },
          { top: '14%', left: '52%', size: 3, delay: 1.8, duration: 6 },
          { top: '24%', left: '90%', size: 2, delay: 0.8, duration: 4.2 },
          { top: '12%', left: '62%', size: 3.5, delay: 2.5, duration: 5.5 },
          { top: '35%', left: '15%', size: 2, delay: 1.5, duration: 3.8 },
          { top: '20%', left: '10%', size: 2.5, delay: 3, duration: 4.8 },
          { top: '26%', left: '80%', size: 3, delay: 0.3, duration: 5 },
        ].map((star, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.7 }
                : {
                    opacity: [0.2, 0.95, 0.2],
                    scale: [0.8, 1.4, 0.8],
                  }
            }
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.95)]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* 3. Futuristic Ambient Dune Lighting Accents */}
      <div className="pointer-events-none absolute bottom-[15%] left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-t from-primary-600/20 via-amber-500/15 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[25%] left-[20%] h-[260px] w-[380px] rounded-full bg-primary-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[20%] right-[15%] h-[260px] w-[380px] rounded-full bg-amber-500/10 blur-[100px]" />

      {/* 4. Fine Horizon Wave Light */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030509] to-transparent" />
    </div>
  )
}
