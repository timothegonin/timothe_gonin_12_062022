import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('Should render the brand logo', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const brandLogo = screen.getByAltText("SportSee's Logo")
  expect(brandLogo).toBeInTheDocument()
})
