import React, { memo } from 'react'
import toastStyles from './styles'
import ToastIcon from './ToastIcon'
import ToastContent from './ToastContent'
import { capitalize } from './utils'
import { ToastEvents, ToastEventType } from './useToast'
import ToastCloseIcon from './ToastCloseIcon'

interface Props {
  variant: ToastVariant
  message: string
  title?: string
  delay?: number
  onClose(): void
}

export enum ToastVariants {
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

export const ToastEventToVariant: {
  [K in ToastEventType]: keyof typeof ToastVariants
} = {
  [ToastEvents.successToast]: ToastVariants.success,
  [ToastEvents.warningToast]: ToastVariants.warning,
  [ToastEvents.dangerToast]: ToastVariants.danger
}

export type ToastVariant = keyof typeof ToastVariants

const Toast = ({ variant, title, message, onClose }: Props) => {
  const toastTitle = title || capitalize(variant)

  return (
    <div
      className={`${toastStyles[variant]} relative mb-[26px] flex w-full rounded-md p-3 font-['montserrat']`}
      data-testid="toast-item"
    >
      <ToastIcon variant={variant} className="mr-3 mt-1.5" />
      <ToastContent title={toastTitle} message={message} />
      <ToastCloseIcon variant={variant} onClose={onClose} />
    </div>
  )
}

export default memo(Toast)
