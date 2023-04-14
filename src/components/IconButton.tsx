interface IconButtonProps {
    title: string,
    icon: React.ReactNode,
    secondIcon?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string
}

const IconButton: React.FC<IconButtonProps> = ({title, onClick, icon, secondIcon, className}) => {
  return (
    <button 
        className={`px-3 py-[4px] sm:px-5 sm:py-[6px] min-w-fit text-xs md:text-base h-10 flex items-center gap-2 bg-zinc-700 bg-opacity-50 rounded-full font-bold hover:bg-zinc-600 hover:cursor-pointer ${className}`}
        onClick={onClick}
    >
        {icon}
        {title}
        {secondIcon}
    </button>
  )
}

export default IconButton