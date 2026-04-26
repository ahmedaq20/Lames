'use client'

import { useEffect, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollTimeline() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh()
    
    return () => {
      // Cleanup all ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const createTimeline = (trigger: string | Element, options: gsap.plugins.ScrollTriggerInstanceVars = {}) => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        ...options
      }
    })
  }

  return { createTimeline, gsap, ScrollTrigger }
}
