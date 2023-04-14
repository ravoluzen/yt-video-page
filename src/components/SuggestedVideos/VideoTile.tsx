import { formatNumber } from '@/utils/formatNumber'
import Image from 'next/image'
import React from 'react'
import { ColumnStack } from '../Layouts/ColumnStack'
import { RowStack } from '../Layouts/RowStack'

interface VideoTileProps {
  thumbnail: string, 
  title: string, 
  channel: string,
  views: number,
  datePublished: string,
}
const VideoTile: React.FC<VideoTileProps> = ({thumbnail, title, channel, views, datePublished }) => {
  return (
    <RowStack className='w-full gap-2 font-bold text-sm'>
        <img src={thumbnail} className='rounded-lg aspect-video w-[45%]'/>
        <ColumnStack className='md:w-1/2 gap-2 my-2'>
            <p className='text-white line-clamp-2'>{title}</p>
            <p className='text-xs text-gray-300 truncate'>{channel}</p>
            <p className='text-xs text-gray-300'>
              {views ? `${formatNumber(views)} views` : ''}
              <span className='ml-2'>{`•   ${datePublished}`}</span>
            </p>
        </ColumnStack>
    </RowStack>
  )
}

export default VideoTile