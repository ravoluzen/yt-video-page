import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
  params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  }
};

export async function getPlaylistData(){
    const response = await axios.request(options)
    const data = await response.data

    const requiredProps = ["video"]
    let playlistVideos = []

    playlistVideos = data.contents
      .filter((video:any) => requiredProps.every(prop => video[prop] !== undefined))
      .map((video:any) => {
        return video.video
    })

    console.log(playlistVideos[0], "playlistVideos")

    return playlistVideos
}