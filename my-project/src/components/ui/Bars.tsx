import { cn } from '@/lib/cn'
import type { AccentColor } from './types'

type BarsProps = {
  /** Bar heights in px (max 24). */
  heights: number[]
  color?: Extract<AccentColor, 'cyan' | 'green' | 'orange'>
  className?: string
}

const BAR_COLOR: Record<NonNullable<BarsProps['color']>, string> = {
  cyan: 'bg-accent-cyan',
  green: 'bg-accent-green',
  orange: 'bg-accent-orange',
}

export function Bars({ heights, color = 'cyan', className }: BarsProps) {
  return (
    <div
      className={cn('flex h-6 items-end gap-[3px]', className)}
      role="img"
      aria-label="Trend"
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={cn('block w-1 rounded-[1px]', BAR_COLOR[color])}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  )
}
