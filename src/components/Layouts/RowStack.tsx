interface RowStackProps {
    children: React.ReactNode
    className?: string,
}

export const RowStack: React.FC<RowStackProps> = ({children, className}) => {
  return (
    <div className={`flex ${className}`}>
        {children}
    </div>
  )
}
