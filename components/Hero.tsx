'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

// ─── Configuration ─────────────────────────────────────────────
const SCROLL_HEIGHT_VH = 100 // container height in vh
const PARALLAX_INTENSITY = 30 // max px offset for mouse parallax
const VIDEO_SCALE = 1.05 // scale to hide edges during parallax

// ─── Hero Component ────────────────────────────────────────────
function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Framer Motion scroll-based transforms for the text overlay
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 200])
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85])

  // ─── Mouse parallax ─────────────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const video = videoRef.current
    if (!video) return

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Offset in opposite direction for depth illusion
    const offsetX = -((e.clientX - centerX) / centerX) * PARALLAX_INTENSITY
    const offsetY = -((e.clientY - centerY) / centerY) * PARALLAX_INTENSITY

    gsap.to(video, {
      x: offsetX,
      y: offsetY,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }, [])

  // ─── Video Loading Fallback ───────────────
  useEffect(() => {
    if (isLoaded) return

    // If video is already loaded by the time this runs
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setTimeout(() => setIsLoaded(true), 0)
      return
    }

    // Set a maximum fallback timeout of 3 seconds
    const fallbackTimeout = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(fallbackTimeout)
  }, [isLoaded])

  // ─── Attach mousemove listeners ───────────
  useEffect(() => {
    if (!isLoaded) return

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLoaded, handleMouseMove])

  const titleWords = 'We create digital dreams'.split(' ')

  return (
    <>
      {/* ─── Loading Screen ─────────────────────────────────── */}
      <div
        className={`scrollytelling-loading ${isLoaded ? 'loaded' : ''}`}
        aria-hidden={isLoaded}
      >
        <p className="loading-text mb-6">Loading Experience</p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill animate-pulse" style={{ width: '100%' }} />
        </div>
      </div>

      {/* ─── Scrollytelling Container ───────────────────────── */}
      <section
        ref={containerRef}
        id="home"
        className="relative w-full bg-black"
        style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* ─── Video (absolute, fullscreen) ──────────────────── */}
          <video
            ref={videoRef}
            src="/video/hero2.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsLoaded(true)}
            onCanPlay={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            style={{
              transform: `scale(${VIDEO_SCALE})`,
              willChange: 'transform',
            }}
          />

          {/* Glassmorphism Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/10 rounded-full blur-[120px] z-0 pointer-events-none" />

          {/* ─── Cinematic Overlay Layers ─────────────────────── */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
            {/* Side vignettes */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          </div>

          {/* ─── Hero Content Overlay ─────────────────────────── */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <motion.div
              style={{ y: textY, opacity: textOpacity, scale: textScale }}
              className="relative max-w-7xl mx-auto text-center pointer-events-auto px-6 md:px-12"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium backdrop-blur-md mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                Next-Generation Creative Studio
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter mb-6">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + i * 0.1,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block mr-4 last:mr-0"
                  >
                    {i === 2 ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-light"
              >
                Transforming bold ideas into{' '}
                <span className="text-white font-medium">
                  cinematic digital experiences
                </span>{' '}
                that bridge the gap between reality and the future.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link
                  href="/contact"
                  data-cursor="EXPLORE"
                  className="group relative bg-white text-black font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Start the Journey</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <button
                  data-cursor="PLAY"
                  className="group px-8 py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                >
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Play size={14} className="fill-current ml-1" />
                  </span>
                  Showreel 2024
                </button>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Scroll to Explore
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 48] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 left-0 w-full h-4 bg-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero