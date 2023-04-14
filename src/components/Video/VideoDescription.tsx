import { useState } from "react"
import { ColumnStack } from "../Layouts/ColumnStack"

interface VideoDescriptionProps {
  views: string,
  datePublished: string,
  description: string,
}
const VideoDescription: React.FC<VideoDescriptionProps> = ({views, datePublished, description}) => {
  const [expanded, setExpanded] = useState<Boolean>(false)

  return (
    <ColumnStack className="w-full lg:w-[66vw]">
      <article className='w-full p-2 md:p-4 rounded-2xl bg-zinc-600 bg-opacity-50 leading-6 '>
        <p className="font-bold">{views} Views<span className="mx-2">Published on {datePublished}</span></p>
        <p className={`${expanded ? 'h-fit' : 'h-2/5 line-clamp-3'} w-3/5`}>
          {description}
        </p>
        <p 
          onClick={() => setExpanded(!expanded)}
          className='font-bold cursor-pointer self-end'
        >
          {expanded ? "Show Less" : "Show More"}
        </p>
      </article>
    </ColumnStack>
  )
}

export default VideoDescription