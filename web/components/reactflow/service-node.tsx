import { Node, NodeProps } from '@xyflow/react'

type ServiceNode = Node<{ label: string; number: number }>

const ServiceNode = ({ data }: NodeProps<ServiceNode>) => {
  return (
    <div>
      <div className='relative flex items-center justify-center rounded-xl bg-surface shadow-xs xl:col-start-10 xl:col-end-24 row-span-3 xl:row-start-11 lg:col-start-14 lg:col-end-30 lg:row-start-7 col-start-2 col-end-16 row-start-11 workflows-hero-card'>
        <div className='workflows-hero-card-running absolute right-0 flex items-center gap-x-1 rounded-lg border border-subtle-stroke bg-surface-subtle px-[5px] py-px opacity-0'>
          <svg
            className='animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='none'
            viewBox='0 0 12 12'
          >
            <circle cx='6' cy='6' r='4.5' stroke='#D1D3D6'></circle>
            <path stroke='#5C5E63' strokeLinecap='round' d='M6 10.5a4.5 4.5 0 0 0 0-9'></path>
          </svg>
          <span className='text-tertiary-foreground text-xs'>Running</span>
        </div>
        <div className='workflows-hero-card-completed absolute right-0 flex items-center gap-x-1 rounded-lg border border-[#C7F4D3] bg-[#DDF9E4] px-[5px] py-px opacity-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='none'
            viewBox='0 0 12 12'
          >
            <path
              stroke='#0B935D'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 5.7 3.7 7c.5.7.7 1 1 1.2h.8c.3-.1.5-.5 1-1.2L9 3'
            ></path>
          </svg>
          <span className='text-[#0B935D] text-xs'>Completed</span>
        </div>
        <div className='relative h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[11px] bg-primary-background p-[11px]'>
          <div className='flex gap-x-1.5 border-subtle-stroke border-b pb-[11px]'>
            <svg
              className='rounded-[6px] border border-subtle-stroke'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 256 256'
            >
              <path
                fill='#f5bc00'
                d='M134.3 151.7c0 9.5 7.8 17.3 17.4 17.3H195c9.5 0 17.3-7.8 17.3-17.3 0-9.6-7.8-17.4-17.3-17.4h-43.3c-9.6 0-17.4 7.8-17.4 17.4zM134.3 177.7V195a17.4 17.4 0 0 0 34.7 0c0-9.5-7.8-17.3-17.3-17.3z'
              ></path>
              <path
                fill='#f55376'
                d='M108.3 134.3c-9.5 0-17.3 7.8-17.3 17.4V195c0 9.5 7.8 17.3 17.3 17.3 9.6 0 17.4-7.8 17.4-17.3v-43.3c0-9.6-7.8-17.4-17.4-17.4zM82.3 134.3H65a17.4 17.4 0 0 0 0 34.7c9.5 0 17.3-7.8 17.3-17.3z'
              ></path>
              <path
                fill='#00b3d7'
                d='M125.7 108.3c0-9.5-7.8-17.3-17.4-17.3H65c-9.5 0-17.3 7.8-17.3 17.3 0 9.6 7.8 17.4 17.3 17.4h43.3c9.6 0 17.4-7.8 17.4-17.4zM125.7 82.3V65A17.4 17.4 0 0 0 91 65c0 9.5 7.8 17.3 17.3 17.3z'
              ></path>
              <path
                fill='#00b569'
                d='M151.7 125.7c9.5 0 17.3-7.8 17.3-17.4V65c0-9.5-7.8-17.3-17.3-17.3-9.6 0-17.4 7.8-17.4 17.3v43.3c0 9.6 7.8 17.4 17.4 17.4zM177.7 125.7H195a17.4 17.4 0 0 0 0-34.7c-9.5 0-17.3 7.8-17.3 17.3z'
              ></path>
            </svg>
            <span className='flex-1 truncate text-primary-foreground text-sm tracking-[-0.3px]'>
              Send action buttons to Slack
            </span>
            <div className='justify-self-end rounded-lg border border-subtle-stroke bg-surface-subtle px-[6px] py-px text-accent-foreground text-xs'>
              Slack
            </div>
          </div>
          <p className='mt-2 truncate text-black-800 text-xs'>
            Send a summary and action buttons to Slack.
          </p>
        </div>
        <svg
          className='absolute -translate-x-1/2 bottom-0 left-1/2 translate-y-[5.5px]'
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          fill='none'
          viewBox='0 0 12 12'
        >
          <circle
            cx='6'
            cy='6'
            r='4.8'
            fill='#fff'
            strokeWidth='1'
            className='stroke-blue-500'
          ></circle>
          <circle
            cx='6'
            cy='6'
            r='4.8'
            fill='#fff'
            strokeWidth='1'
            className='workflows-hero-card-connection stroke-green-500 opacity-0'
          ></circle>
        </svg>
      </div>
    </div>
  )
}

export default ServiceNode
