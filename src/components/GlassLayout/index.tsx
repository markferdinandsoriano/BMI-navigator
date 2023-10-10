import React from 'react'
import './index.css'

type Props = {
    children: React.ReactNode,
    className?: string
}

const GlassLayout = ({ children, className }: Props) => {
    return (
        <div className={`root ${className || ''}`}>{children}</div>
    )
}

export default GlassLayout