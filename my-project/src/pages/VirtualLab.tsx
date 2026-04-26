import { useEffect } from 'react'
import { useTopbar } from '@/components/layout/Layout'
import { Breadcrumbs, LiveIndicator } from '@/components/ui'

export default function VirtualLab() {
  const setTopbar = useTopbar()

  useEffect(() => {
    setTopbar({
      left: (
        <Breadcrumbs
          items={[
            { label: 'Virtual Lab' },
            { label: 'Experiment 22 — Test Set' },
          ]}
        />
      ),
      right: <LiveIndicator label="Live Stream: Active" />,
    })
  }, [setTopbar])

  return (
    <div className="flex flex-1 items-center justify-center p-6 text-font-secondary">
      <p className="font-mono text-sm">Virtual Lab — control panel & graph (TODO)</p>
    </div>
  )
}
