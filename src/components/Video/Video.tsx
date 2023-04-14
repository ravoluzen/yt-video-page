import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import VideoOptions from './VideoOptions'
import VideoDescription from './VideoDescription'
import { ColumnStack } from '../Layouts/ColumnStack'
import { getVideoDetails } from '@/utils/data/getVideoDetails'
import { formatNumber } from '@/utils/formatNumber'
import { formatString } from '@/utils/formatString'

const Video = () => {
  const [videoData, setVideoData] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideoDetails = async () => {
      await getVideoDetails()
      .then((res) => setVideoData(res))
      .then(() => console.log(videoData, "video"))
      setLoading(false)
    }

    fetchVideoDetails()
  }, [])

  if(loading) return <>loading...</>

  return (
    <ColumnStack className='gap-4 w-full lg:w-[66vw]'>
        <section className='mt-2 md:mt-6 relative w-full aspect-video lg:w-[66vw]'>
          <VideoPlayer id={videoData.videoId}/>
        </section>       
        <VideoOptions
          channel={videoData.channel}
          channelImage={videoData.channelImage}
          subscribers={formatNumber(videoData.subscribers)}
          likes={formatNumber(videoData.likes)}
        />
        <VideoDescription
          views={formatNumber(videoData.views)}
          datePublished={videoData.datePublished}
          description={formatString(videoData.description)}
        />

    </ColumnStack>
  )
}

export default Video