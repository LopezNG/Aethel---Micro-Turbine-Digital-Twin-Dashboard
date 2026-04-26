import { cn } from '@/lib/cn'

type LiveIndicatorProps = {
  label?: string
  className?: string
}

export function LiveIndicator({
  label = 'Simulated Live Stream: Active',
  className,
}: LiveIndicatorProps) {
  return (
    <span
      className={cn(
        'flex items-center gap-2 font-mono text-xs text-accent-green',
        className,
      )}
    >
      <span className="h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-current" />
      {label}
    </span>
  )
}
