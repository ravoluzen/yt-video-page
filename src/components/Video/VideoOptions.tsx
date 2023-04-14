import { useState } from "react"
import { ColumnStack } from "../Layouts/ColumnStack"
import { RowStack } from "../Layouts/RowStack"
import { FaRegBellSlash as BellSlash } from "react-icons/fa"
import { TbShare3 as ShareIcon } from "react-icons/tb"
import { TfiDownload as DownloadIcon } from "react-icons/tfi"
import { FiThumbsUp as LikeIcon, FiThumbsDown as DislikeIcon } from "react-icons/fi"
import IconButton from "../IconButton"

interface VideoOptionsProps {
    channel: string,
    subscribers: string,
    likes: string,
    channelImage: string,
}
const VideoOptions: React.FC<VideoOptionsProps> = ({channel, subscribers, likes, channelImage}) => {
  const [subscribed, setSubscribed] = useState<Boolean>(false)

  return (
    <RowStack className="mt-4 w-full lg:w-[66vw]">
        <ColumnStack className="w-full gap-4 md:flex-row text-white md:items-center">
            <RowStack className="w-4/5 md:w-3/5 gap-2 self-start items-center justify-between md:justify-start">
                <RowStack className="gap-3 w-fit hover:animate-wiggle cursor-pointer">
                    <img src={channelImage} alt="Channel Image" className="w-12 h-12 rounded-full aspect-square" />
                    <ColumnStack className="items-start w-[10vw]">
                        <p className="font-bold">{channel}</p>
                        <p className="text-zinc-400 text-sm w-fit">{`${subscribers} Subscribers`}</p>
                    </ColumnStack>
                </RowStack>
                <IconButton
                    onClick={() => setSubscribed(!subscribed)}
                    title={subscribed ? "Subscribed" : "Subscribe"}
                    icon={subscribed && <BellSlash className="text-xl" />}
                />
            </RowStack>
            <RowStack className="gap-2 justify-start md:items-center md:justify-center md:ml-auto">
                <IconButton 
                    title={`${likes} |`}
                    icon={<LikeIcon className="text-xl"/>}
                    secondIcon={<DislikeIcon className="text-xl"/>}
                />
                <IconButton 
                    title="Share" 
                    icon={<ShareIcon className="text-xl"/>}
                />
                <IconButton
                    className="flex md:hidden xl:flex" 
                    title="Download" 
                    icon={<DownloadIcon className="text-xl"/>}
                />
                <IconButton title="..." icon={<></>}/>
            </RowStack>
        </ColumnStack>
    </RowStack>
  )
}

export default VideoOptions