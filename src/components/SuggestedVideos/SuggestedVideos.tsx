import { getPlaylistData } from '@/utils/data/getPlaylistData'
import React, { useEffect, useState } from 'react'
import { ColumnStack } from '../Layouts/ColumnStack'
import VideoTile from './VideoTile'

const SuggestedVideos = () => {
  const [playlistVideos, setPlaylistVideos] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      await getPlaylistData()
      .then((res) => setPlaylistVideos(res))
      // .then(() => setLoading(false))
    }

    fetchPlaylistVideos();

  }, [])

  // if(loading) return <p>loading...</p>
  return (
    <ColumnStack className='mt-2 w-full lg:w-[25vw] lg:flex gap-2 order-2 md:row-span-3 col-span-1 lg:justify-self-end cursor-pointer'>
      {playlistVideos ? (
        playlistVideos.map((video) => (
          <VideoTile
            key={video?.title}
            thumbnail={video?.thumbnails[0].url}
            title={video?.title}
            channel={video?.author.title}
            views={video?.stats?.views}
            datePublished={video?.publishedTimeText}
          />
        ))
      ) : (
          <p>Loading...</p>
        )
      }
    </ColumnStack>
  )
}

export default SuggestedVideos