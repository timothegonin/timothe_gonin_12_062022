import { Container } from 'react-bootstrap'

import Header from './Containers/Header'
import Dashboard from './Containers/Dashboard'
import Sidebar from './Containers/Sidebar'

function App() {
  return (
    <Container fluid className="App px-0">
      <Header />
      <Sidebar />
      <Dashboard />
    </Container>
  )
}

export default App
