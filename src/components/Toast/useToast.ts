export interface ToastEventInput {
  title?: string
  message: string
}

type ToastHookOutput = {
  [K in ToastEventType]: (params: ToastEventInput) => void
}

export enum ToastEvents {
  successToast = 'successToast',
  warningToast = 'warningToast',
  dangerToast = 'dangerToast'
}

export type ToastEventType = keyof typeof ToastEvents

const eventCreator = (event: ToastEventType, data: ToastEventInput) => {
  const successEvent = new CustomEvent(event, {
    detail: data
  })
  return dispatchEvent(successEvent)
}

const successToast = (params: ToastEventInput) =>
  eventCreator(ToastEvents.successToast, params)
const warningToast = (params: ToastEventInput) =>
  eventCreator(ToastEvents.warningToast, params)
const dangerToast = (params: ToastEventInput) =>
  eventCreator(ToastEvents.dangerToast, params)

const useToast = (): ToastHookOutput => ({
  successToast,
  warningToast,
  dangerToast
})

export default useToast
