import { Container } from 'react-bootstrap'

import UserContextProvider from './Context/UserContext'

import Header from './Containers/Header'
import Dashboard from './Containers/Dashboard'
import Sidebar from './Containers/Sidebar'

function App() {
  return (
    <Container fluid className="App px-0">
      <UserContextProvider>
        <Header />
        <Sidebar />
        <Dashboard />
      </UserContextProvider>
    </Container>
  )
}

export default App
