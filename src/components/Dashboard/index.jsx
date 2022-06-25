import React from 'react'

function Dashboard() {
  return (
    <main>
      <h1>Bonjour Thomas</h1>
      <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="container-fluid">
        <div className="row">
          <div className='col-10 bg-danger container'>
            <div className="row bg-warning pb-1">
              <div className="p-5 bg-info"></div>
            </div>
            <div className="row pt-1 d-flex justify-content-between">
              <div className="col-3 p-0">
                <div className="p-3 border bg-info">Custom column padding</div>
              </div>
              <div className="col-3 p-0">
                <div className="p-3 border bg-info">Custom column padding</div>
              </div>
              <div className="col-3 p-0">
                <div className="p-3 border bg-info">Custom column padding</div>
              </div>
            </div>
          </div>
          <div className='col-2 bg-info d-flex flex-column justify-content-between pe-0'>
            <div className=" p-3 bg-warning"></div>
            <div className=" p-3 bg-warning"></div>
            <div className=" p-3 bg-warning"></div>
            <div className=" p-3 bg-warning"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard