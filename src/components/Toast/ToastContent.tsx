import React from 'react'

interface Props {
  title: string
  message: string
}

const ToastContent = ({ title, message }: Props) => {
  return (
    <div className="flex flex-col">
      <h4 className="line-clamp-1 pr-5 font-semibold" title={title}>
        {title}
      </h4>
      <p>{message}</p>
    </div>
  )
}

export default ToastContent
