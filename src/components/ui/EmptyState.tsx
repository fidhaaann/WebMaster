'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon, FileQuestion } from 'lucide-react'

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  title?: string
  description?: string
  action?: React.ReactNode
}

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ 
    className, 
    icon: Icon = FileQuestion, 
    title = 'No items yet', 
    description = 'Check back soon for updates.',
    action,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center',
          'p-8 md:p-12 rounded-2xl',
          'bg-soft/50 dark:bg-dark-surface/50',
          'border-2 border-dashed border-primary/20',
          'text-center',
          className
        )}
        {...props}
      >
        {/* Icon Container */}
        <div className={cn(
          'w-20 h-20 rounded-full mb-6',
          'bg-primary/10 flex items-center justify-center',
          'animate-pulse'
        )}>
          <Icon className="w-10 h-10 text-primary/60" />
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-deep dark:text-soft mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-deep/60 dark:text-soft/60 max-w-sm mb-6">
          {description}
        </p>

        {/* Action */}
        {action && <div>{action}</div>}
      </div>
    )
  }
)

EmptyState.displayName = 'EmptyState'

export { EmptyState }
