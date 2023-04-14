
interface VideoPlayerProps {
    id: string,
}

const baseUrl = "https://www.youtube.com/embed/"

const VideoPlayer: React.FC<VideoPlayerProps> = ({id}) => {
  return (
    <iframe className='absolute w-full h-full' src={`${baseUrl}${id}`}/>
  )
}

export default VideoPlayer