import React, { useState } from 'react'

/**
 * Component that displays a Toast with information about the data source (API or mock data).
 * @function DataInfo
 * @returns {HTMLElement}
 */

function DataInfo() {
  //Toast handler
  // const [toastDisplayed, setToastDisplayed] = useState(true)
  // const handleToast = () => setToastDisplayed(!toastDisplayed)

  const dataMode = process.env.REACT_APP_DATA_MODE
  const dataModeMessage =
    dataMode === 'API' ? `API` : `mock des données de l'API`

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="inline-flex flex-col border border-slate-200 rounded-lg"
    >
      <div className="flex justify-between px-5 py-1 bg-slate-200">
        <strong className="font-semibold">
          <span>🎯</span> DATA MODE
        </strong>
        <button className="hover:fill-red-500 hover:stroke-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-l"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
      </div>
      <p className="px-5 py-2">
        Les données proviennent de : {`${dataModeMessage}`}
      </p>
    </div>
  )
}

export default DataInfo
