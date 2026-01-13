'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollReveal(options?: {
  threshold?: number
  delay?: number
  duration?: number
  y?: number
}) {
  const ref = useRef<HTMLElement>(null)
  
  const {
    threshold = 0.2,
    delay = 0,
    duration = 0.8,
    y = 50,
  } = options || {}

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.set(element, { opacity: 0, y })

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${100 - threshold * 100}%`,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
        })
      },
      once: true,
    })

    return () => {
      trigger.kill()
    }
  }, [threshold, delay, duration, y])

  return ref
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const yOffset = self.progress * 100 * speed
        gsap.set(element, { y: -yOffset })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [speed])

  return ref
}

export function useStaggerReveal(staggerDelay: number = 0.1) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.children
    gsap.set(children, { opacity: 0, y: 30 })

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: 'power3.out',
        })
      },
      once: true,
    })

    return () => {
      trigger.kill()
    }
  }, [staggerDelay])

  return containerRef
}

export function useTextSplitReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Split text into words
    const text = element.textContent || ''
    const words = text.split(' ')
    element.innerHTML = words
      .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
      .join(' ')

    const innerSpans = element.querySelectorAll('span > span')
    gsap.set(innerSpans, { y: '100%' })

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(innerSpans, {
          y: '0%',
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
        })
      },
      once: true,
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return ref
}

export function useZoomBlur() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.set(element, { scale: 1.1, filter: 'blur(10px)' })

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const scale = 1.1 - progress * 0.1
        const blur = 10 - progress * 10
        gsap.set(element, { 
          scale, 
          filter: `blur(${Math.max(0, blur)}px)` 
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return ref
}
