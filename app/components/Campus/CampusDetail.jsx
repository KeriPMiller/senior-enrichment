import React,{ Component } from 'react'
import { fetchOneCampus, destroyOneCampus } from '../../reducers/campus'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CampusDetail extends Component {

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.props.getCampusDetail(campusId);
  }

  render() {
    const campus = this.props.campus
    return(
      <div className="campus">
        <h2>{campus.name}</h2>
        <img src={campus.image}></img>
        <button>addNewStudent</button>
        <button>Delete Campus!</button>
      </div>
    )
  }
}

const mapStateToProps = () => ({campus}) => ({campus})

const mapDispatchToProps = (dispatch) => {
  return {
    getCampusDetail: (campus) => {
      dispatch(fetchOneCampus(campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusDetail)


// <ul>
//   {this.props.campus.Students.map((student) => (
//     <li>{student.name}</li>
//   ))}
// </ul>
