import { cn } from '@/lib/cn'
import type { AccentColor } from './types'

type KPITileProps = {
  label: string
  value: string
  accent?: Extract<AccentColor, 'cyan' | 'green' | 'orange'>
  className?: string
}

const VALUE_COLOR: Record<NonNullable<KPITileProps['accent']>, string> = {
  cyan: 'text-accent-cyan',
  green: 'text-accent-green',
  orange: 'text-accent-orange',
}

export function KPITile({ label, value, accent = 'cyan', className }: KPITileProps) {
  return (
    <article
      className={cn(
        'flex flex-col gap-3 rounded-[10px] border border-border-subtle bg-surface-card p-5',
        className,
      )}
    >
      <span className="text-[0.8125rem] font-medium text-font-secondary">{label}</span>
      <span
        className={cn(
          'font-mono text-[2rem] font-bold leading-none',
          VALUE_COLOR[accent],
        )}
      >
        {value}
      </span>
    </article>
  )
}
