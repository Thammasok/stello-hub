import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  )
}
