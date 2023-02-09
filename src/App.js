import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import Header from './Containers/Header'
import Sidebar from './Containers/Sidebar'
import Router from './utils/Router'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function App() {
  return (
    <Container fluid className="App px-0">
      <Header />
      <Sidebar />
      <MainWrapper>
        <Router />
      </MainWrapper>
    </Container>
  )
}

export default App

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MainWrapper = styled.main`
  margin-left: 117px;
  padding: 0 90px;
  @media screen and (max-width: 1155px) {
    padding: 0 16px;
    max-width: 1126px;
  }
`
