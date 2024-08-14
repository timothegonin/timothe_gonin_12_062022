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
test('Should render the Header component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const homeLink = screen.getByRole('link', { name: 'Accueil' })
  const disabledProfileLink = screen.getByRole('button', { name: 'Profil' })
  const disabledSettingLink = screen.getByRole('button', { name: 'Réglage' })
  const disabledCommunityLink = screen.getByRole('button', {
    name: 'Communauté',
  })
  expect(homeLink).toBeInTheDocument()
  expect(disabledProfileLink).toBeInTheDocument()
  expect(disabledSettingLink).toBeInTheDocument()
  expect(disabledCommunityLink).toBeInTheDocument()
})
test('Should render the Sidebar component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const copyright = screen.getByText(/copyright, sportSee 2020/i)
  const icons = screen.getAllByAltText(/icon/)
  expect(copyright).toBeInTheDocument()
  expect(icons.length).toBe(4)
})
