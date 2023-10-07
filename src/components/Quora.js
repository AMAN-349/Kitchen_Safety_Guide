import React from 'react'
import QuoraHeader from './QuoraHeader'
import Siderbar from './Siderbar'
import Feed from './Feed'
import Widget from './Widget'
import "./css/Quora.css";

function Quora() {
  return (
    <div className="quora">
      <QuoraHeader/>
      <div className="quora--contents">
        <div className="quora__content">
            <Siderbar/>
            <Feed/>
            <Widget/>

        </div>
      </div>
    </div>
  )
}

export default Quora
