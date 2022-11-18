import { Container } from 'react-bootstrap'

import UserContextProvider from './utils/context/UserContext'

import Header from './Containers/Header'
import Sidebar from './Containers/Sidebar'
import Router from './utils/Router'

function App() {
  return (
    <Container fluid className="App px-0">
      <UserContextProvider>
        <Header />
        <Sidebar />
        <Router />
      </UserContextProvider>
    </Container>
  )
}

export default App
