import { Bars } from './Bars'
import { StatusBadge, type ExperimentStatus } from './StatusBadge'
import type { AccentColor } from './types'

export type Experiment = {
  id: string
  name: string
  /** Free-form metadata (date · dataset · metric). */
  meta: string
  status: ExperimentStatus
  trend: number[]
  trendColor?: Extract<AccentColor, 'cyan' | 'green' | 'orange'>
}

type ExperimentCardProps = {
  experiment: Experiment
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-[10px] border border-border-subtle bg-surface-card px-5 py-4 max-[900px]:flex-col max-[900px]:items-start">
      <div className="flex min-w-0 flex-col gap-1">
        <div className="text-sm font-semibold">{experiment.name}</div>
        <div className="font-mono text-[0.6875rem] text-font-tertiary">
          {experiment.meta}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 max-[900px]:w-full max-[900px]:justify-between">
        <Bars heights={experiment.trend} color={experiment.trendColor ?? 'cyan'} />
        <StatusBadge status={experiment.status} />
      </div>
    </article>
  )
}
