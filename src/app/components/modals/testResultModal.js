import React from 'react';
import './testResultModal.css';
// import BarChart from '../js/BarChart.js'
// import '../css/main.css'


const Modal = ({ show, close }) => {


  return (


    <div className="modal-container" 
      style={{
        visibility: show ? 'visible' : 'hidden'
      }}>
      <div className="modal-wrapper"
      // style={{
      //   visibility: show ? 'visible' : 'hidden'
      // }}
      >
        <div className="modal-header">
          <p>Welcome To Our Site</p>
          <span onClick={close} className="close-modal-btn">x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <div className="chart-container">
              {/* <BarChart /> */}
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={close} className="btn-cancel">Close</button>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Modal;