import React from 'react'

function Dashboard() {
  return (
    <main className="col-11 p-0">
      <section className="my-5">
        <h1>
          Bonjour <span className="text-primary">Thomas</span>
        </h1>
        <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <div className="charts d-flex justify-content-between">
        {/* Charts Block */}
        <div className="charts__containers">
          <div className="charts__content bg-danger mb-4"></div>
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
