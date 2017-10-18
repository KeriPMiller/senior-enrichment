import React from 'react';
import { withRouter, NavBar } from 'react-router-dom';
import { connect } from 'react-redux';
import Campus from './Campus'

function CampusList (props) {
  return(
    <div>
      <h3>Campuses</h3>
      <ul>
        {
          campuses.map(campus => {
            return (
              <li key={campus.id}>
                  <span>{campus.name}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {campuses: state.campuses};
};

export default withRouter(connect(mapStateToProps)(CampusList));
