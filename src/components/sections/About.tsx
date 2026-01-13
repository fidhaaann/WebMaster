'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { Users, Lightbulb, Rocket, Target, CheckCircle } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with peers, mentors, and industry professionals',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Explore cutting-edge technologies and creative solutions',
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Accelerate your professional and personal development',
  },
  {
    icon: Target,
    title: 'Focus',
    description: 'Hands-on workshops tailored for practical learning',
  },
]

const highlights = [
  'IEEE Student Members & College Students',
  'Hands-on Technical Workshops',
  'Industry Expert Sessions',
  'Project Showcases',
  'Certificate of Participation',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const text = textRef.current
    const features = featuresRef.current
    const highlights = highlightsRef.current

    if (!section || !title || !text || !features || !highlights) return

    // Title split text animation
    const titleText = title.textContent || ''
    const chars = titleText.split('')
    title.innerHTML = chars
      .map((char, i) => 
        `<span class="inline-block opacity-0 char-${i}">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('')

    const charSpans = title.querySelectorAll('[class^="char-"]')
    
    ScrollTrigger.create({
      trigger: title,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(charSpans, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.03,
          ease: 'power2.out',
        })
      },
      once: true,
    })

    // Text paragraphs animation
    const paragraphs = text.children
    gsap.set(paragraphs, { opacity: 0, y: 30 })

    ScrollTrigger.create({
      trigger: text,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(paragraphs, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        })
      },
      once: true,
    })

    // Features cards animation
    const featureCards = features.children
    gsap.set(featureCards, { opacity: 0, y: 50, scale: 0.9 })

    ScrollTrigger.create({
      trigger: features,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(featureCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        })
      },
      once: true,
    })

    // Highlights list animation
    const highlightItems = highlights.children
    gsap.set(highlightItems, { opacity: 0, x: -30 })

    ScrollTrigger.create({
      trigger: highlights,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(highlightItems, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
        })
      },
      once: true,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-24 px-4 md:px-8 bg-soft dark:bg-dark-bg overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About The Event
          </span>
          <h2
            ref={titleRef}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-deep dark:text-soft mb-6"
          >
            What is LINK CAMP?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <p className="text-lg md:text-xl text-deep/80 dark:text-soft/80 leading-relaxed">
              <span className="text-primary font-semibold">LINK CAMP 2025</span> is IEEE LINK&apos;s 
              flagship event designed to bridge the gap between academic learning and real-world 
              technology applications.
            </p>
            <p className="text-deep/70 dark:text-soft/70 leading-relaxed">
              This three-day immersive experience brings together bright minds from across 
              the region to learn, collaborate, and innovate. Whether you&apos;re a seasoned 
              coder or just starting your tech journey, LINK CAMP offers something valuable 
              for everyone.
            </p>
            <p className="text-deep/70 dark:text-soft/70 leading-relaxed">
              Join us for inspiring keynotes, hands-on workshops, networking sessions, 
              and the chance to work on real projects that make an impact.
            </p>
          </div>

          {/* Highlights List */}
          <div
            ref={highlightsRef}
            className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/10"
          >
            <h3 className="font-display font-semibold text-xl text-deep dark:text-soft mb-6">
              Who Should Attend?
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-deep/80 dark:text-soft/80"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm',
                'border border-primary/10',
                'transition-all duration-500',
                'hover:shadow-card-hover hover:-translate-y-2',
                'hover:border-primary/30'
              )}
            >
              {/* Icon */}
              <div className={cn(
                'w-14 h-14 rounded-xl mb-4',
                'bg-primary/10 flex items-center justify-center',
                'transition-all duration-300',
                'group-hover:bg-primary group-hover:scale-110'
              )}>
                <feature.icon className={cn(
                  'w-7 h-7 text-primary',
                  'transition-colors duration-300',
                  'group-hover:text-soft'
                )} />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-deep dark:text-soft mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-deep/60 dark:text-soft/60">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/0 transition-all duration-500 group-hover:bg-primary/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
