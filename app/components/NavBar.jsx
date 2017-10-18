import React from 'react';
import { connect } from 'react-redux';

function NavBar (props) {
  const { currentCampus } = props;

  return (
    <nav>
      <h3> Interplanetary Campus {currentCampus}</h3>
    </nav>
  )
}

const mapStateToProps = function( state ) {
  return {
    currentCampus: state.currentCampus
  };
};

export default connect(mapStateToProps)(NavBar);
