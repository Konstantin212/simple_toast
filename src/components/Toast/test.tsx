import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import App from '../App'
import { vi } from 'vitest'

import { beforeEach } from 'vitest'

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})
afterEach(() => {
  vi.restoreAllMocks()
})
describe('ToastContainer', () => {
  it('renders without crashing', async () => {
    const { container, queryByText, getByTestId } = render(<App />)

    const showToastButton = queryByText('Show toast')

    fireEvent.click(showToastButton as Element)

    const toastContainer = getByTestId('toast-container')

    expect(container).toBeInTheDocument()
    expect(toastContainer).toBeInTheDocument()
  })

  it('displays toasts', () => {
    const { queryByText, getByTitle } = render(<App />)

    const showToastButton = queryByText('Show toast')

    fireEvent.click(showToastButton as Element)

    const successToast = getByTitle('Success')
    expect(successToast).toBeInTheDocument()
  })

  it('closes toast when close button is clicked', () => {
    const { queryByText, getByTestId, queryByTitle } = render(<App />)

    const showToastButton = queryByText('Show toast')

    fireEvent.click(showToastButton as Element)

    const closeToast = getByTestId('toast-close')
    fireEvent.click(closeToast)

    const successToast = queryByTitle('Success')
    expect(successToast).not.toBeInTheDocument()
  })

  it('removes toast after delay', async () => {
    const { queryByText, queryByTitle, queryByDisplayValue } = render(<App />)
    const delayInput = queryByDisplayValue('6000')

    fireEvent.change(delayInput as Element, { target: { value: 1000 } })

    const showToastButton = queryByText('Show toast')

    fireEvent.click(showToastButton as Element)

    vi.advanceTimersByTime(1000)

    await waitFor(() => {
      expect(queryByTitle('Success')).not.toBeInTheDocument()
    })
  })
})
