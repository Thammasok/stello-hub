import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div>
      <div className='flex items-center gap-2 p-2'>
        <ModeToggle />
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/board'>Board</Link>
      </div>
    </div>
  )
}
