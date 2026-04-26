import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { AccentColor } from './types'

type BadgeProps = {
  icon: LucideIcon
  iconColor?: Extract<AccentColor, 'cyan' | 'green' | 'orange'>
  children: React.ReactNode
  className?: string
}

const ICON_COLOR: Record<NonNullable<BadgeProps['iconColor']>, string> = {
  cyan: 'text-accent-cyan',
  green: 'text-accent-green',
  orange: 'text-accent-orange',
}

export function Badge({ icon: Icon, iconColor = 'cyan', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-md bg-surface-elevated px-4 py-2',
        'font-mono text-[0.8125rem] text-font-secondary',
        className,
      )}
    >
      <Icon className={cn('h-4 w-4', ICON_COLOR[iconColor])} />
      {children}
    </span>
  )
}
