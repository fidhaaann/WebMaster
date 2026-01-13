'use client'

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
  }

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-primary text-soft',
    'hover:bg-accent hover:shadow-glow',
    'dark:bg-primary dark:text-dark-bg'
  ),
  secondary: cn(
    'bg-deep text-soft',
    'hover:bg-deep/90',
    'dark:bg-soft dark:text-deep'
  ),
  outline: cn(
    'border-2 border-primary text-primary bg-transparent',
    'hover:bg-primary hover:text-soft',
    'dark:border-primary dark:text-primary',
    'dark:hover:bg-primary dark:hover:text-dark-bg'
  ),
  ghost: cn(
    'text-deep bg-transparent',
    'hover:bg-primary/10',
    'dark:text-soft dark:hover:bg-primary/10'
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      as = 'button',
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      loading = false,
      fullWidth = false,
      className,
      children,
      ...rest
    } = props
    
    const disabled = 'disabled' in rest ? rest.disabled : false

    const baseStyles = cn(
      'relative inline-flex items-center justify-center',
      'rounded-full font-semibold',
      'transition-all duration-300 ease-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'group'
    )

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    )

    const content = (
      <>
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {Icon && iconPosition === 'left' && (
            <Icon className={cn(iconSizeStyles[size], 'transition-transform group-hover:-translate-x-0.5')} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={cn(iconSizeStyles[size], 'transition-transform group-hover:translate-x-0.5')} />
          )}
        </span>
      </>
    )

    if (as === 'a') {
      const { href, ...anchorProps } = rest as ButtonAsAnchor
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...anchorProps}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled || loading}
        {...(rest as ButtonAsButton)}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
