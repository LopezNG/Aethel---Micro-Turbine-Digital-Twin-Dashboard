import { Hexagon, PanelLeftClose } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '@/config/nav'
import { cn } from '@/lib/cn'

type SidebarProps = {
  isCollapsed: boolean
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col min-w-0 overflow-hidden bg-surface-solid',
        // Mobile drawer
        'fixed inset-y-0 left-0 z-[60] w-60 transform transition-transform duration-300 ease-in-out',
        mobileOpen ? 'translate-x-0 shadow-[8px_0_32px_rgba(0,0,0,0.4)]' : '-translate-x-full',
        // Desktop: width animates between rail and full width
        'lg:static lg:translate-x-0 lg:shadow-none lg:transition-all lg:duration-300',
        isCollapsed ? 'lg:w-14' : 'lg:w-60',
      )}
    >
      <SidebarHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className="h-px bg-border-subtle" />

      <nav className="flex flex-col gap-0.5 py-3">
        {NAV_ITEMS.map((item) => (
          <SidebarLink
            key={item.to}
            item={item}
            isCollapsed={isCollapsed}
            onNavigate={onMobileClose}
          />
        ))}
      </nav>
    </aside>
  )
}

type SidebarHeaderProps = {
  isCollapsed: boolean
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
}

function SidebarHeader({ isCollapsed, setIsCollapsed }: SidebarHeaderProps) {
  const expand = () => setIsCollapsed(false)
  const collapse = () => setIsCollapsed(true)

  return (
    <div
      className={cn(
        'flex items-center whitespace-nowrap py-6 transition-all duration-300',
        // Center the logo when collapsed; spread logo + close button when open.
        isCollapsed ? 'lg:justify-center lg:px-2' : 'justify-between gap-2.5 px-5',
      )}
    >
      {/*
        Logo doubles as the expand-toggle when collapsed. When the sidebar
        is open it's a non-interactive brand mark (the Close button handles
        the inverse direction), so we toggle `disabled` accordingly.
      */}
      <button
        type="button"
        onClick={expand}
        disabled={!isCollapsed}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Aethel'}
        title={isCollapsed ? 'Expand sidebar' : undefined}
        className={cn(
          'flex shrink-0 items-center gap-2.5 rounded-md transition-colors duration-200',
          // Only when collapsed does the logo behave like an interactive toggle.
          isCollapsed
            ? 'cursor-pointer p-1.5 hover:bg-surface-elevated focus-visible:bg-surface-elevated focus-visible:outline-none'
            : 'cursor-default p-0',
        )}
      >
        <span className="inline-flex h-6 w-6 shrink-0 text-accent-cyan">
          <Hexagon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <span
          className={cn(
            'text-lg font-bold transition-opacity duration-300',
            isCollapsed ? 'lg:hidden' : 'opacity-100',
          )}
        >
          Aethel
        </span>
      </button>

      {/*
        Close button: visible only when the sidebar is open. We keep it in
        the tree and animate opacity (per spec) for a smooth fade — width
        collapses to 0 in the same transition so the flex row re-centers
        the logo cleanly when collapsed.
      */}
      <button
        type="button"
        onClick={collapse}
        aria-label="Collapse sidebar"
        tabIndex={isCollapsed ? -1 : 0}
        aria-hidden={isCollapsed || undefined}
        className={cn(
          'inline-flex h-[34px] shrink-0 items-center justify-center overflow-hidden rounded-md',
          'text-font-secondary transition-all duration-300',
          'hover:bg-surface-elevated hover:text-font-primary',
          isCollapsed
            ? 'pointer-events-none w-0 opacity-0'
            : 'w-[34px] opacity-100',
        )}
      >
        <PanelLeftClose className="h-[18px] w-[18px] shrink-0" />
      </button>
    </div>
  )
}

type SidebarLinkProps = {
  item: (typeof NAV_ITEMS)[number]
  isCollapsed: boolean
  onNavigate: () => void
}

function SidebarLink({ item, isCollapsed, onNavigate }: SidebarLinkProps) {
  const Icon = item.icon
  return (
    <NavLink
      to={item.to}
      end={false}
      title={item.label}
      onClick={onNavigate}
      aria-disabled={item.disabled || undefined}
      className={({ isActive }) =>
        cn(
          'mx-3 flex items-center gap-3 overflow-hidden whitespace-nowrap rounded-md px-4 py-2.5 text-sm transition-colors',
          'text-font-secondary hover:bg-[#1E253055]',
          isActive && !item.disabled && 'bg-accent-cyan-dim font-medium text-font-primary',
          item.disabled && 'pointer-events-none opacity-60',
          isCollapsed && 'lg:mx-2 lg:justify-center lg:px-0',
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={cn(
              'h-[18px] w-[18px] shrink-0',
              isActive && !item.disabled ? 'text-accent-cyan' : 'text-font-tertiary',
            )}
          />
          <span className={cn('truncate', isCollapsed && 'lg:hidden')}>{item.label}</span>
        </>
      )}
    </NavLink>
  )
}
