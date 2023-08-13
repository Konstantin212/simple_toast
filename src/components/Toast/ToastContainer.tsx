import React, { useCallback, useEffect, useState } from 'react'
import Toast from './Toast'
import useToastInterceptor, { ToastInterceptData } from './useToastInterceptor'

import './style.css'

interface Props {
  delay?: number
}

const ToastContainer = ({ delay = 6000 }: Props) => {
  const interceptor = useToastInterceptor()
  const [toasts, setToast] = useState<ToastInterceptData[]>([])

  useEffect(() => {
    if (!interceptor) return

    setToast((prevToasts) =>
      prevToasts ? [interceptor, ...prevToasts] : [interceptor]
    )
  }, [interceptor])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (toasts.length > 0) {
        setToast(toasts.slice(1))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [toasts])

  const handelCloseToast = useCallback(
    (id: string) => () => {
      const updatedToasts = toasts.filter((toast) => toast.id !== id)
      setToast(updatedToasts)
    },
    [toasts]
  )

  if (!toasts.length) return null

  return (
    <div
      className="hidden-scrollbar fixed bottom-0 left-1/2 z-[99999] max-h-[calc(98px*3)] w-full max-w-[590px] -translate-x-1/2 overflow-scroll px-5"
      data-testid="toast-container"
    >
      <div className="flex flex-col items-end justify-center">
        {toasts.length &&
          toasts.map((toast) => (
            <Toast
              onClose={handelCloseToast(toast.id)}
              key={toast.id}
              variant={toast.variant}
              title={toast.title}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  )
}

export default ToastContainer
