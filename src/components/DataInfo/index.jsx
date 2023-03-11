import React, { useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'

function DataInfo() {
  const [showA, setShowA] = useState(true)
  const toggleShowA = () => setShowA(!showA)

  return (
    <ToastContainer
      className="p-5 mt-5"
      position="top-end"
      style={{ zIndex: '999' }}
    >
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header closeButton={true}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default DataInfo
