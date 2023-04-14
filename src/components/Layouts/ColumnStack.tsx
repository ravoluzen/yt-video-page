interface ColumnStackProps {
    children: React.ReactNode
    className?: string,
}

export const ColumnStack: React.FC<ColumnStackProps> = ({children, className}) => {
  return (
    <div className={`flex flex-col ${className}`}>
        {children}
    </div>
  )
}
