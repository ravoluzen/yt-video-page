import { useEffect, useState } from 'react'
import { getComments } from '@/utils/data/getComments'
import Comment from './Comment'
import { ColumnStack } from '../Layouts/ColumnStack'

const Comments = () => {
  const [comments, setComments] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchComments = async () => {
      await getComments()
      .then(() => console.log(comments, "commentsList"))
      .then(() => setLoading(false))
    }

    fetchComments()
  }, [])

  if(loading) return <>loading...</>

  return (
    <ColumnStack className="gap-2 order-3 w-full lg:w-[66vw]">
      <p className='text-lg'>Comments</p>
      <Comment
          channel="RAVOLUZEN"
          channelImage={""}
          published="14-04-2023"
          content="Test Comment"
          likes={66}
        />
      {comments && comments.map((comment:any) => {
        <Comment
          channel={comment.author.title}
          channelImage={comment.author.avatar[0].url}
          published={comment.publishedTimeText}
          content={comment.content}
          likes={comment.stats.votes}
        />
      })}
    </ColumnStack>
  )
}

export default Comments