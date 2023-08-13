import { useEffect, useState } from 'react'
import { ToastEventInput, ToastEvents, ToastEventType } from './useToast'
import { ToastEventToVariant, ToastVariants } from './Toast'
import { v4 as uuidv4 } from 'uuid'

type SuccessEventType = {
  type: ToastEvents.successToast
  variant: ToastVariants.success
}
type WarningEventType = {
  type: ToastEvents.warningToast
  variant: ToastVariants.warning
}
type DangerEventType = {
  type: ToastEvents.dangerToast
  variant: ToastVariants.danger
}

export type ToastInterceptData = { id: string } & ToastEventInput &
  (SuccessEventType | WarningEventType | DangerEventType)

const useToastInterceptor = (): ToastInterceptData | null => {
  const [toastData, setToastData] = useState<ToastInterceptData | null>(null)

  const handleToastEvents = (e: CustomEvent) => {
    setToastData({
      ...e.detail,
      type: e.type,
      variant: ToastEventToVariant[e.type as ToastEventType],
      id: uuidv4()
    })
  }

  useEffect(() => {
    window.addEventListener(
      ToastEvents.successToast,
      handleToastEvents as EventListener
    )

    window.addEventListener(
      ToastEvents.warningToast,
      handleToastEvents as EventListener
    )

    window.addEventListener(
      ToastEvents.dangerToast,
      handleToastEvents as EventListener
    )

    return () => {
      removeEventListener(
        ToastEvents.successToast,
        handleToastEvents as EventListener
      )
      removeEventListener(
        ToastEvents.warningToast,
        handleToastEvents as EventListener
      )
      removeEventListener(
        ToastEvents.dangerToast,
        handleToastEvents as EventListener
      )
    }
  }, [])

  return toastData
}

export default useToastInterceptor
