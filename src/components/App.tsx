import React, { useState } from 'react'
import useToast, { ToastEvents, ToastEventType } from './Toast/useToast'
import ToastContainer from './Toast/ToastContainer'

const defaultMessageShort = 'Short message'
const defaultMessageLong =
  'Long message Control the padding on one side of an element using the p{t|r|b|l}-{size} utilities.For example, pt-6 would add 1.5rem of padding to the top of an element, pr-4 would add 1rem of padding to the right of an element, pb-8 would add 2rem of padding to the bottom of an element, and pl-2 would add 0.5rem of padding to the left of an element.'

function App() {
  const toast = useToast()

  const [variant, setVariant] = useState<ToastEventType>(
    ToastEvents.successToast
  )
  const [title, setTitle] = useState('')
  const [delay, setDelay] = useState(6000)
  const showToast = () => {
    toast[variant]({ title, message: defaultMessageShort })
  }
  const showToastLongText = () => {
    toast[variant]({ title, message: defaultMessageLong })
  }

  const handleVariant = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e

    if (target) setVariant(target.value as ToastEventType)
  }
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e

    if (target) setTitle(target.value)
  }
  const handleDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e

    if (target) setDelay(Number(target.value))
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <h1 className="text-center text-lg font-bold">Toast demo playground</h1>
      <div className="m-5 mx-auto w-1/2 rounded bg-amber-400 p-5 shadow">
        <div>Variant:</div>
        <div className="flex items-center p-5">
          <label htmlFor="success">Success</label>
          <input
            type="radio"
            id="success"
            name="variant"
            checked={variant === ToastEvents.successToast}
            value={ToastEvents.successToast}
            className="ml-2 mr-5"
            onChange={handleVariant}
          />
          <label htmlFor="warning">Warning</label>
          <input
            type="radio"
            id="warning"
            name="variant"
            checked={variant === ToastEvents.warningToast}
            value={ToastEvents.warningToast}
            className="ml-2 mr-5"
            onChange={handleVariant}
          />
          <label htmlFor="danger">Danger</label>
          <input
            type="radio"
            id="danger"
            name="variant"
            checked={variant === ToastEvents.dangerToast}
            value={ToastEvents.dangerToast}
            className="ml-2 mr-5"
            onChange={handleVariant}
          />
        </div>
        <div className="flex items-center p-5">
          <label htmlFor="title" className="w-1/4">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="ml-2 mr-5 w-full"
            onChange={handleTitle}
          />
        </div>
        <div className="flex items-center p-5">
          <label htmlFor="title" className="w-1/4">
            Delay:
          </label>
          <input
            data-testid="delay-input"
            type="number"
            id="delay"
            name="delay"
            className="ml-2 mr-5 w-full"
            value={delay}
            onChange={handleDelay}
          />
        </div>
        <button
          onClick={showToast}
          className="cursor-pointer rounded bg-green-500 px-3 py-2 text-white shadow hover:bg-green-400"
        >
          Show toast
        </button>
        <button
          onClick={showToastLongText}
          className="ml-10 cursor-pointer rounded bg-green-500 px-3 py-2 text-white shadow hover:bg-green-400"
        >
          Show toast with long text
        </button>
      </div>
      <ToastContainer delay={delay} />
    </div>
  )
}

export default App
