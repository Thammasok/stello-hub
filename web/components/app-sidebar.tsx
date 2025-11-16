'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Bot,
  BotIcon,
  ChartColumnIcon,
  CheckSquare2,
  Frame,
  Layers3Icon,
  LifeBuoy,
  MailIcon,
  Map,
  MonitorIcon,
  NotebookPenIcon,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from 'lucide-react'
import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: MonitorIcon,
      isActive: true,
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: CheckSquare2,
    },
    {
      title: 'Notes',
      url: '/notes',
      icon: NotebookPenIcon,
    },
    {
      title: 'Email',
      url: '/email',
      icon: MailIcon,
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: ChartColumnIcon,
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'AI Chatbot',
      url: '/projects/ai-chatbot',
      icon: BotIcon,
      items: [
        {
          title: 'Features',
          url: '/projects/ai-chatbot',
        },
        {
          title: 'Documentation',
          url: '/projects/ai-chatbot/docs',
        },
        {
          title: 'Releases',
          url: '/projects/ai-chatbot/releases',
        },
        {
          title: 'Supports',
          url: '/projects/ai-chatbot/support',
        },
      ],
    },
    {
      name: 'Nutshell',
      url: '/projects/nutshell',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '/projects/travel',
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='#'>
                <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                  <Layers3Icon size={16} strokeWidth={2} />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>Staddy</span>
                  <span className='truncate text-xs'>Profesional</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
