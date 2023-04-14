import React, { useState } from 'react'
import { ColumnStack } from '../Layouts/ColumnStack'
import { RowStack } from '../Layouts/RowStack'
import { FiThumbsUp as LikeIcon, FiThumbsDown as DislikeIcon } from "react-icons/fi"

interface CommentsProps {
    content: string, 
    channel:string, 
    channelImage:string, 
    published:string, 
    likes:number
  }
  
const Comment: React.FC<CommentsProps> = ({content, channel, channelImage, published, likes}) => {
  const [expanded, setExpanded] = useState<Boolean>(false)

  return (
    <RowStack className='w-full gap-2'>
      <img src={channelImage} alt="" className="w-10 h-10 rounded-full aspect-square" />
        <ColumnStack className='w-4/5 justify-around gap-2'>
          <RowStack className='gap-2 md:w-1/2'>
            <p>{channel}</p>
            <p>{published}</p>
          </RowStack>
          <p className={`${expanded ? 'h-fit' : 'line-clamp-4'}`}>
            {content}
          </p>
          <p 
            onClick={() => setExpanded(!expanded)}
            className='font-bold text-sm cursor-pointer text-zinc-400'
          >
            {expanded ? "Show Less" : "Read More"}
          </p>

          <RowStack className='gap-3'>
            <LikeIcon />
            <DislikeIcon />
            <p className='font-bold'>Reply</p>
          </RowStack>
        </ColumnStack>

    </RowStack>
  )
}

export default Comment