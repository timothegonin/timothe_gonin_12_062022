import React, { useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'

/**
 * Component that displays a Toast with information about the data source (API or mock data).
 * @function DataInfo
 * @returns {HTMLElement}
 */

function DataInfo() {
  //Toast handler
  const [toastDisplayed, setToastDisplayed] = useState(true)
  const handleToast = () => setToastDisplayed(!toastDisplayed)

  const dataMode = process.env.REACT_APP_DATA_MODE
  const dataModeMessage =
    dataMode === 'API' ? `API` : `mock des données de l'API`

  return (
    <ToastContainer
      className="p-5 mt-5"
      position="top-end"
      style={{ zIndex: '999' }}
    >
      <Toast show={toastDisplayed} onClose={handleToast}>
        <Toast.Header closeButton={true}>
          <strong className="me-auto">DATA MODE</strong>
          <small>📌</small>
        </Toast.Header>
        <Toast.Body>
          Les données proviennent de : {`${dataModeMessage}`} .
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default DataInfo
