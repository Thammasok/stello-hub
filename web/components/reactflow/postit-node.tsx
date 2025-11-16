import { Handle, Node, NodeProps, Position } from '@xyflow/react'
import React, { memo, useEffectEvent, useState } from 'react'

type PostItNode = Node<{ label: string }>

const PostItNode = memo(({ data }: NodeProps<PostItNode>) => {
  const [text, setText] = useState('')

  useEffectEvent(() => {
    setText(data.label)
  })

  return (
    <div className='bg-yellow-200 border border-yellow-400 rounded-lg shadow-md p-4 min-w-[150px] min-h-[100px] relative'>
      <textarea
        className='w-full h-full bg-transparent resize-none focus:outline-none'
        defaultValue={text}
        onChange={(e) => setText(e.target.value)} // Update data on change
      />
      <Handle type='target' position={Position.Top} className='w-4 h-4 bg-yellow-500' />
      <Handle type='source' position={Position.Bottom} className='w-4 h-4 bg-yellow-500' />
    </div>
  )
})

PostItNode.displayName = 'PostItNode'

export default PostItNode
