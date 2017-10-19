import React,{ Component } from 'react'
import { fetchOneCampus } from '../../reducers/campus'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CampusDetail extends Component {

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    console.log(campusId)
    this.props.getCampusDetail(campusId);
  }

  render() {
    return(
      <div className="campus">
        <h1>{this.props.campus.name}</h1>
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
