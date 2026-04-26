import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { LiveIndicator } from '@/components/ui/LiveIndicator'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePersistentState } from '@/hooks/usePersistentState'
import { cn } from '@/lib/cn'

const SIDEBAR_KEY = 'aethel-sidebar-collapsed'

type TopbarSlots = {
  left: ReactNode
  right: ReactNode
}

type TopbarContextValue = {
  setTopbar: (slots: Partial<TopbarSlots>) => void
}

const TopbarContext = createContext<TopbarContextValue | null>(null)

type LayoutProps = {
  /** Default `collapsed` state when no localStorage value is present. */
  defaultCollapsed?: boolean
}

export function Layout({ defaultCollapsed = false }: LayoutProps) {
  const isMobile = useMediaQuery('(max-width: 1023px)')
  const [isCollapsed, setIsCollapsed] = usePersistentState<boolean>(
    SIDEBAR_KEY,
    defaultCollapsed,
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const [slots, setSlots] = useState<TopbarSlots>({
    left: null,
    right: <LiveIndicator />,
  })

  const setTopbar = useCallback((next: Partial<TopbarSlots>) => {
    setSlots((prev) => ({ ...prev, ...next }))
  }, [])

  const handleToggleSidebar = useCallback(() => {
    if (isMobile) {
      setMobileOpen((open) => !open)
    } else {
      setIsCollapsed((c) => !c)
    }
  }, [isMobile, setIsCollapsed])

  // Close mobile drawer when crossing the breakpoint upward.
  useEffect(() => {
    if (!isMobile) setMobileOpen(false)
  }, [isMobile])

  const contextValue = useMemo<TopbarContextValue>(() => ({ setTopbar }), [setTopbar])

  return (
    <TopbarContext.Provider value={contextValue}>
      <div className="relative flex min-h-screen">
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />

        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={cn(
            'fixed inset-0 z-[55] bg-black/50 transition-opacity duration-200 lg:hidden',
            mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          )}
        />

        <main className="flex min-w-0 flex-1 flex-col">
          <Topbar
            onToggleSidebar={handleToggleSidebar}
            left={slots.left}
            right={slots.right}
          />
          <Outlet />
        </main>
      </div>
    </TopbarContext.Provider>
  )
}

/**
 * Pages call this once (in an effect) to publish their topbar slots.
 * Returns a stable setter; pass `null` to clear a slot.
 */
export function useTopbar(): TopbarContextValue['setTopbar'] {
  const ctx = useContext(TopbarContext)
  if (!ctx) {
    throw new Error('useTopbar must be used inside <Layout>')
  }
  return ctx.setTopbar
}
