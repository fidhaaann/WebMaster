'use client'

import { forwardRef, HTMLAttributes, useState } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'bordered' | 'elevated'
  hoverable?: boolean
  tiltEffect?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = true, tiltEffect = false, children, ...props }, ref) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tiltEffect) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setTilt({
        x: (y - 0.5) * 10,
        y: (x - 0.5) * -10,
      })
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setTilt({ x: 0, y: 0 })
    }

    const variantStyles = {
      default: 'bg-white dark:bg-dark-surface',
      glass: 'bg-white/50 dark:bg-dark-surface/50 backdrop-blur-lg',
      bordered: 'bg-transparent border-2 border-primary/20',
      elevated: 'bg-white dark:bg-dark-surface shadow-card',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-2xl p-6',
          'border border-primary/10',
          'transition-all duration-500',
          variantStyles[variant],
          hoverable && 'hover:shadow-card-hover hover:-translate-y-1',
          tiltEffect && 'transform-gpu',
          className
        )}
        style={
          tiltEffect
            ? {
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered ? 'none' : 'transform 0.5s ease-out',
              }
            : undefined
        }
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Glow effect on hover */}
        {hoverable && (
          <div
            className={cn(
              'absolute inset-0 -z-10 rounded-2xl',
              'bg-primary/0 transition-all duration-500',
              'group-hover:bg-primary/5'
            )}
          />
        )}
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-display font-semibold text-xl text-deep dark:text-soft',
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-deep/60 dark:text-soft/60', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 pt-4 border-t border-primary/10', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
