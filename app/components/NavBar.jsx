import React from 'react'
import { connect } from 'react-redux'

function NavBar (props) {
  const { currentCampus } = props

  return (
    <nav className="nav" style={{backgroundColor: 'black', color: 'white', padding: '30px'}}>
      <h3> Margaret Hamilton Interplanetary Academy of JavaScript</h3>
      <div style={{padding: '30px'}}>
        <button> Home </button>
        <button> Students </button>
      </div>
    </nav>
  )
}

const mapStateToProps = function( state ) {
  return {
    currentCampus: state.currentCampus
  }
}

export default connect(mapStateToProps)(NavBar)
