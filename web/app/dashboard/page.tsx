import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ArrowUpRightIcon, CheckSquare2Icon, FolderIcon, HelpCircleIcon } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center justify-between gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />

            <div className='flex items-center gap-2'>
              <CheckSquare2Icon size={16} />
              <h5>Dashboard</h5>
            </div>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Button size='sm' variant='ghost'>
              <HelpCircleIcon />
              Helps
            </Button>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant='icon'>
                <FolderIcon />
              </EmptyMedia>
              <EmptyTitle>No Projects Yet</EmptyTitle>
              <EmptyDescription>
                You haven&apos;t created any projects yet. Get started by creating your first
                project.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className='flex gap-2'>
                <Button>Create Project</Button>
                <Button variant='outline'>Import Project</Button>
              </div>
            </EmptyContent>
            <Button variant='link' asChild className='text-muted-foreground' size='sm'>
              <Link href='#'>
                Learn More <ArrowUpRightIcon />
              </Link>
            </Button>
          </Empty>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
