import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import Landing from '@/pages/Landing'
import Results from '@/pages/Results'
import VirtualLab from '@/pages/VirtualLab'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<Layout defaultCollapsed />}>
          <Route path="/virtual-lab" element={<VirtualLab />} />
          <Route path="/results" element={<Results />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
