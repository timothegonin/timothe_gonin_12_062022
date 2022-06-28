import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
// import Sidebar from './components/Sidebar'

function App() {
  return (
    <Container fluid className="App px-0">
      <Header />
      {/* <Sidebar /> */}
      <Dashboard />
    </Container>
  )
}

export default App
