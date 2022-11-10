import { Container } from 'react-bootstrap'

import UserContextProvider from './utils/context/UserContext'

import Header from './Containers/Header'
// import Dashboard from './Containers/Dashboard'
import Sidebar from './Containers/Sidebar'
import Router from './components/Router'

function App() {
  return (
    <Container fluid className="App px-0">
      <UserContextProvider>
        <Header />
        <Sidebar />
        <Router />
        {/* <Dashboard /> */}
      </UserContextProvider>
    </Container>
  )
}

export default App
