import NavBar from '@/components/Navbar'
import Video from '@/components/Video/Video'
import SuggestedVideos from '@/components/SuggestedVideos/SuggestedVideos'
import Comments from '@/components/Comments/Comments'


export default function Home() {
  return (
    <main className="min-h-screen px-2 lg:px-8">
      <NavBar />
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full place-items-start'>
        <Video />
        <SuggestedVideos />
        <Comments />
      </section>

    </main>
  )
}
