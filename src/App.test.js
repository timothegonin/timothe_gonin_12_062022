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
  const disabledProfileLink = screen.getByText('Profil')
  const disabledSettingLink = screen.getByText('Réglage')
  const disabledCommunityLink = screen.getByText('Communauté')
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
test('Should userCards components', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const cardsTitle = screen.getAllByRole(
    'heading',
    { level: 3 },
    { name: /utilisateur/ }
  )
  const cardsButtons = screen.getAllByRole('button', {
    name: /Accéder au profile/i,
  })
  expect(cardsTitle.length).toBe(2)
  expect(cardsButtons.length).toBe(2)
})
