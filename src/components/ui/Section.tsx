'use client'

import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
  fullWidth?: boolean
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 px-4 md:px-8',
        className
      )}
    >
      <div
        className={cn(
          fullWidth ? 'w-full' : 'max-w-7xl mx-auto',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = 'center',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={cn('max-w-3xl mb-12 md:mb-16', alignmentClasses[align], className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-deep dark:text-soft mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-deep/60 dark:text-soft/60">
          {description}
        </p>
      )}
    </div>
  )
}
