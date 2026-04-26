import { cn } from '@/lib/cn'

export type Crumb = {
  label: string
  to?: string
}

type BreadcrumbsProps = {
  items: Crumb[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex min-w-0 items-center gap-3 text-[0.8125rem]', className)}
    >
      {items.map((crumb, idx) => {
        const isLast = idx === items.length - 1
        return (
          <span key={`${crumb.label}-${idx}`} className="flex min-w-0 items-center gap-3">
            <span
              className={cn(
                idx === 0 && 'text-[0.9375rem] font-bold text-font-primary',
                idx > 0 && !isLast && 'text-font-secondary',
                isLast && idx > 0 && 'truncate text-font-secondary',
              )}
            >
              {crumb.label}
            </span>
            {!isLast && <span className="text-font-tertiary">/</span>}
          </span>
        )
      })}
    </nav>
  )
}
