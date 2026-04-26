import {
  BarChart,
  FlaskConical,
  LayoutDashboard,
  Settings,
  Terminal,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  label: string
  to: string
  icon: LucideIcon
  disabled?: boolean
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Virtual Lab', to: '/virtual-lab', icon: FlaskConical },
  { label: 'Results', to: '/results', icon: BarChart },
  { label: 'API Sandbox', to: '/api-sandbox', icon: Terminal, disabled: true },
  { label: 'Settings', to: '/settings', icon: Settings, disabled: true },
] as const
