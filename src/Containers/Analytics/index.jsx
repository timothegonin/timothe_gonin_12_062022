import { Fragment, useContext } from 'react'
import { UserContext } from '../../utils/context'
import { User } from '../../utils/service/models/User'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

//User banner
import HelloUser from '../../components/HelloUser'
// Charts components
import Activity from '../../components/Charts_collection/Activity'
import SessionsDuration from '../../components/Charts_collection/SessionsDuration'
import ActivityType from '../../components/Charts_collection/ActivityType'
import Score from '../../components/Charts_collection/Score'
// Counters
import Counters from '../../components/Counters'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Analytics = ({ data, id }) => {
  console.log(id)
  console.log(data)
  // console.log(data[0].data) //main data
  // console.log(data[1].data) //activity
  // console.log(data[2].data) //session duration
  // console.log(data[3].data) //activity type
  const activeUser = new User(Number(id))
  console.log(activeUser)

  // const { activeUser } = useContext(UserContext)
  // useEffect(() => {
  //   const setUser = (entry) => {
  //     dispatch({
  //       type: 'SET_NEW_USER',
  //       payload: {
  //         user: new User(Number(entry)),
  //       },
  //     })
  //   }
  //   setUser(idFromURL)
  // }, [idFromURL])

  return (
    <Fragment>
      <section>
        <HelloUser firstName={activeUser.userFirstName} />
      </section>
      <section>
        <ContentWrapper fluid className="mx-0">
          <Row className="d-flex justify-content-center">
            <ChartsWrapper>
              <Row>
                <ChartFullSize>
                  <Activity activity={activeUser.userActivity} />
                </ChartFullSize>
              </Row>
              <Row>
                <ChartsGroup>
                  <SessionsDuration
                    sessionsDuration={activeUser.userAverageSessions}
                  />
                  <ActivityType activityType={activeUser.userActivityType} />
                  <Score score={activeUser.userTodayScore} />
                </ChartsGroup>
              </Row>
            </ChartsWrapper>
            <Counters counterValues={activeUser.userCounterValues} />
          </Row>
        </ContentWrapper>
      </section>
    </Fragment>
  )
}

export default Analytics

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ContentWrapper = styled(Container)`
  max-width: 1126px;
`

const ChartsWrapper = styled(Container)`
  width: 835px;
  height: 611px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ChartFullSize = styled(Col)`
  margin: 0;
  padding: 0;
`

const ChartsGroup = styled(Col)`
  max-width: 835px;
  height: 265px;
  margin: 10px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1406px) {
    margin-bottom: 0;
  }
`
