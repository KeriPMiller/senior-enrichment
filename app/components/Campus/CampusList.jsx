import React,{ Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CampusList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="campus-list">
        {campuses.map(campus => (
          <div key={campus.id}>
            <NavLink to={`/campus/${campus.id}`} className="campus">
              <img src={campus.image} />
            </NavLink>
            <div className="row">
              <NavLink to={`/campus/${campus.id}`} className="campus">
                <h2>{campus.name}</h2>
              </NavLink>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

const mapToProps = () => ({campuses}) => ({campuses})

export default connect(mapToProps)(CampusList)
