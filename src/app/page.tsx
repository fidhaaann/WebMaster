'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Schedule from '@/components/sections/Schedule'
import Registration from '@/components/sections/Registration'
import Footer from '@/components/layout/Footer'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    const sections = document.querySelectorAll('section')
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: section, className: 'active' },
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Registration />
      <Footer />
    </main>
  )
}
