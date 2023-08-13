import { ToastVariant } from './Toast'

export const capitalize = (title: ToastVariant) =>
  title.charAt(0).toUpperCase() + title.slice(1)
