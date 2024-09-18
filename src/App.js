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
    <div className="App px-0">
      <Header />
      <Sidebar />
      <MainWrapper className="flex flex-col items-center ms-24 px-20 xl:ms-32 ">
        <Router />
      </MainWrapper>
    </div>
  )
}

export default App

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MainWrapper = styled.main`
  @media screen and (max-width: 1155px) {
    padding: 0 16px;
    max-width: 1152px;
  }
`
