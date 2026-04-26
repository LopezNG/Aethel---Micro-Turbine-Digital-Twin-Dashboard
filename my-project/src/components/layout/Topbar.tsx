import { PanelLeft } from 'lucide-react'
import type { ReactNode } from 'react'

type TopbarProps = {
  onToggleSidebar: () => void
  left: ReactNode
  right?: ReactNode
}

export function Topbar({ onToggleSidebar, left, right }: TopbarProps) {
  return (
    <>
      <header className="flex items-center justify-between bg-surface-solid px-6 py-4">
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile-only: opens the sidebar drawer. On desktop the
              sidebar header owns the unified expand/collapse trigger. */}
          <button
            type="button"
            aria-label="Open sidebar"
            onClick={onToggleSidebar}
            className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-md border border-transparent text-font-secondary transition-colors hover:border-border-subtle hover:bg-surface-elevated hover:text-font-primary lg:hidden"
          >
            <PanelLeft className="h-[18px] w-[18px]" />
          </button>
          {left}
        </div>
        {right}
      </header>
      <div className="h-px bg-border-subtle" />
    </>
  )
}
