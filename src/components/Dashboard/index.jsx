import React from 'react'

function Dashboard() {
  return (
    <main>
      <h1>Bonjour Thomas</h1>
      <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>

      <div className="d-flex justify-content-evenly">
        {/* Charts Block */}
        <div className="charts__containerss">
          <div className="charts__content bg-danger mb-3"></div>
          <div className="d-flex justify-content-between">
            <div className="charts__content--small bg-warning"></div>
            <div className="charts__content--small bg-warning"></div>
            <div className="charts__content--small bg-warning"></div>
          </div>
        </div>
        {/* Charts Info */}
        <div className="charts-info__container d-flex flex-column justify-content-between">
          <div className="charts-info__content bg-success"></div>
          <div className="charts-info__content bg-success"></div>
          <div className="charts-info__content bg-success"></div>
          <div className="charts-info__content bg-success"></div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
