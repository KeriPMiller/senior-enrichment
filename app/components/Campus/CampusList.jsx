import React, {Component} from 'react'
import {fetchCampuses} from '../../reducers/campuses'
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CampusList extends Component {

  componentDidMount() {
    this.props.getAllCampuses();
  }

  render() {
    return (<div className="container">
      <div className="campus-list">
        {
          this.props.campuses.map(campus => (<div className="campus" key={campus.id}>
              <NavLink to={`/campus/${campus.id}`}>
                <img src={campus.image}/>
              </NavLink>
              <NavLink to={`/campus/${campus.id}`}>
                <h2>{campus.name}</h2>
              </NavLink>
          </div>))
        }
      </div>
    </div>);
  }
}

const mapStateToProps = () => ({campuses}) => ({campuses})
const mapDispatchToProps = (dispatch) => {
  return {
    getAllCampuses: () => {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
