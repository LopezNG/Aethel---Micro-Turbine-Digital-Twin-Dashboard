import { cn } from '@/lib/cn'

export type ExperimentStatus = 'complete' | 'running'

type StatusBadgeProps = {
  status: ExperimentStatus
  className?: string
}

const STATUS_STYLES: Record<ExperimentStatus, { className: string; label: string }> = {
  complete: {
    className: 'bg-accent-green-dim text-accent-green',
    label: 'Complete',
  },
  running: {
    className: 'bg-accent-orange-dim text-accent-orange',
    label: 'Running',
  },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const style = STATUS_STYLES[status]
  return (
    <span
      className={cn(
        'rounded font-mono text-[0.6875rem] font-semibold',
        'px-2.5 py-1',
        style.className,
        className,
      )}
    >
      {style.label}
    </span>
  )
}
