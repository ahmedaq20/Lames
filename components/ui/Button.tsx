import Link from 'next/link'
import { ArrowUpRight, SearchCheck } from 'lucide-react'

/**
 * Global CTA system.
 *
 * Exactly two conversion actions exist on the site:
 *   Primary   →  "Book a Discovery Call"   → /contact
 *   Secondary →  "Get a Free Audit"        → /contact#contact-form
 *
 * Always use <PrimaryCta /> / <SecondaryCta /> for conversion CTAs so labels,
 * routes, and styling never drift. <Button> is the underlying primitive for
 * the rare non-conversion action (e.g. navbar).
 */

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Set when the button sits on a dark surface regardless of theme (hero, final CTA panel). */
  onDark?: boolean
  href: string
  className?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const baseClasses =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950'

function variantClasses(variant: ButtonVariant, onDark: boolean) {
  if (variant === 'primary') {
    return 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-500 hover:shadow-primary-500/30'
  }
  // No backdrop-blur here: the buttons sit on flat backgrounds, and
  // backdrop-filter near continuously-animating content causes flickering
  // hairline seams in GPU-accelerated Chrome.
  if (onDark) {
    return 'border border-white/20 bg-white/[0.04] text-white hover:border-primary-400/50 hover:bg-white/10 focus-visible:ring-offset-slate-950'
  }
  return 'border border-slate-300 bg-white text-slate-800 hover:border-primary-500/50 hover:text-primary-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-100 dark:hover:border-primary-400/50 dark:hover:bg-white/10 dark:hover:text-white'
}

export function Button({
  variant = 'primary',
  size = 'md',
  onDark = false,
  href,
  className = '',
  icon,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses(variant, onDark)} ${className}`}
    >
      {children}
      {icon}
    </Link>
  )
}

export function PrimaryCta({
  size = 'md',
  className = '',
}: {
  size?: ButtonSize
  className?: string
}) {
  return (
    <Button
      variant="primary"
      size={size}
      href="/contact"
      className={className}
      icon={
        <ArrowUpRight
          className="h-[1.15em] w-[1.15em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      }
    >
      Book a Discovery Call
    </Button>
  )
}

export function SecondaryCta({
  size = 'md',
  onDark = false,
  className = '',
}: {
  size?: ButtonSize
  onDark?: boolean
  className?: string
}) {
  return (
    <Button
      variant="secondary"
      size={size}
      onDark={onDark}
      href="/contact#contact-form"
      className={className}
      icon={undefined}
    >
      <SearchCheck className="h-[1.15em] w-[1.15em]" aria-hidden="true" />
      Get a Free Audit
    </Button>
  )
}
