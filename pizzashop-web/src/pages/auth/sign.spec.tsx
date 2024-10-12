import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', async () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            <MemoryRouter
              initialEntries={['/sign-in?email=johndoe@example.com']}
            >
              {children}
            </MemoryRouter>
          </QueryClientProvider>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('johndoe@example.com')
  })
})
