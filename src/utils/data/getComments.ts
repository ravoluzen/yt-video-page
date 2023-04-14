import axios from "axios";

const options = {
    method: 'GET',
    url: `https://youtube138.p.rapidapi.com/video/comments/`,
    params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
      }
  };

export async function getComments(){
    const response = await axios.request(options)
    const data = await response.data

    let comments = []
    comments = data.comments.map((comment:any) => {
        return comment
    })
    console.log("comments", comments)
    return comments
}