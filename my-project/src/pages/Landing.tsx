import { Atom, Container, Flame, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui'

export default function Landing() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-8 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[min(70vw,500px)] w-[min(70vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-cyan-dim) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(90vw,700px)] w-[min(90vw,700px)] -translate-x-1/2 -translate-y-1/2 text-accent-cyan opacity-[0.06]"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="block h-full w-full"
        >
          <path d="M100 10l0 180m-90-90l180 0m-160-70l140 140m0-140l-140 140m70-160c30 30 60 60 70 90-10 30-40 60-70 90-30-30-60-60-70-90 10-30 40-60 70-90m0 20c20 20 40 45 45 70-5 25-25 50-45 70-20-20-40-45-45-70 5-25 25-50 45-70m0 20c10 15 25 30 30 50-5 20-20 35-30 50-10-15-25-30-30-50 5-20 20-35 30-50m-50 50a50 50 0 1 1 100 0 50 50 0 1 1-100 0m15 0a35 35 0 1 1 70 0 35 35 0 1 1-70 0m15 0a20 20 0 1 1 40 0 20 20 0 1 1-40 0" />
        </svg>
      </div>

      <h1 className="text-center text-[clamp(3.5rem,12vw,6rem)] font-extrabold leading-none tracking-[-0.04em]">
        Aethel
      </h1>
      <p className="max-w-3xl text-center text-[clamp(1.25rem,3vw,1.75rem)] font-semibold leading-tight text-font-secondary">
        Predicting the Future of Energy Transitions.
      </p>
      <p className="max-w-2xl text-center text-base leading-relaxed text-font-tertiary">
        A Digital Twin for Micro-Gas Turbines using Temporal Machine Learning.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Badge icon={Atom} iconColor="cyan">
          React
        </Badge>
        <Badge icon={Zap} iconColor="green">
          FastAPI
        </Badge>
        <Badge icon={Flame} iconColor="orange">
          PyTorch
        </Badge>
        <Badge icon={Container} iconColor="cyan">
          Docker
        </Badge>
      </div>

      <Link
        to="/dashboard"
        className="inline-flex items-center justify-center rounded-lg bg-accent-cyan px-10 py-3.5 text-base font-bold text-bg-deep transition-all duration-150 hover:-translate-y-px hover:shadow-[0_12px_32px_-8px_var(--color-accent-cyan-dim)]"
      >
        Quick Start
      </Link>
    </main>
  )
}
