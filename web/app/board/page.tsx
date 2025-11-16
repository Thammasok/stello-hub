'use client'

import '@xyflow/react/dist/style.css'
import '../../assets/styles/reactflow.css'
import { useState, useCallback } from 'react'
import {
  ReactFlow,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type FitViewOptions,
  type OnConnect,
  type OnNodesChange,
  type OnEdgesChange,
  type OnNodeDrag,
  type DefaultEdgeOptions,
  Background,
  ReactFlowProvider,
  Controls,
  MiniMap,
} from '@xyflow/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ServiceNode from '@/components/reactflow/service-node'
import PostItNode from '@/components/reactflow/postit-node'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { CircuitBoardIcon, HelpCircleIcon } from 'lucide-react'

const initialNodes: Node[] = [
  {
    id: 'A',
    type: 'group',
    data: { label: null },
    position: { x: 0, y: 0 },
    style: {
      width: 170,
      height: 140,
    },
  },
  {
    id: 'B',
    type: 'input',
    data: { label: 'child node 1' },
    position: { x: 10, y: 10 },
    parentId: 'A',
    extent: 'parent',
  },
  {
    id: 'C',
    data: { label: 'child node 2' },
    position: { x: 10, y: 90 },
    parentId: 'A',
    extent: 'parent',
  },
  {
    id: 'D',
    type: 'service',
    data: { label: 'custom node service', number: 20 },
    position: { x: 200, y: 50 },
  },
  {
    id: 'E',
    type: 'postit',
    data: { label: 'custom node post it' },
    position: { x: 200, y: 150 },
  },
]

const initialEdges: Edge[] = [{ id: 'b-c', source: 'B', target: 'C' }]

const fitViewOptions: FitViewOptions = {
  padding: 0.5,
}

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
}

const nodeTypes = {
  service: ServiceNode,
  postit: PostItNode,
}

const onNodeDrag: OnNodeDrag = (_, node) => {
  console.log('drag event', node.data)
}

export default function BoardPage() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  )
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  )
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  )

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center justify-between gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />

            <div className='flex items-center gap-2'>
              <CircuitBoardIcon size={16} />
              <h6>Board</h6>/<h6>AI Chatbot</h6>
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
          <div style={{ width: '100%', height: '100%' }}>
            <ReactFlowProvider>
              <div className='absolute z-10 p-2'>
                <Card>
                  <CardContent>Name</CardContent>
                </Card>
              </div>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeDrag={onNodeDrag}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={fitViewOptions}
                defaultEdgeOptions={defaultEdgeOptions}
              >
                <Background />
                <Controls />
                <MiniMap />
              </ReactFlow>
            </ReactFlowProvider>
          </div>
          <div className='absolute right-2 top-12'>
            <Card className='w-xs h-[calc(100vh-72px)]'>
              <CardHeader>Tools</CardHeader>
              <CardContent>Name</CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
