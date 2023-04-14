import axios from "axios";
import { Stats } from "fs";

interface VideoDetails {
    videoId: string;
    title: string;
    channel: string;
    channelImage: string;
    subscribers: number;
    likes: number;
    comments: number;
    views: number;
    description: string;
    datePublished: string;
  }

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    }
  };

export async function getVideoDetails(): Promise<VideoDetails> {
    try {
        const response = await axios.request(options)
        const data = await response.data

        let VideoDetails = {
            videoId: data.videoId,
            title: data.title,
            channel: data.author.title,
            channelImage: data.author.avatar[0].url,
            subscribers: data.author.stats.subscribers,
            likes: data.stats.likes,
            comments: data.stats.comments,
            views: data.stats.views,
            description: data.description,
            datePublished: data.publishedDate,
        }
        return VideoDetails
    } catch (error) {
        console.log(error)
        return error as unknown as VideoDetails
    }

}