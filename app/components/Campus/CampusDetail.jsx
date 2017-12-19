import React,{ Component } from 'react'
import AddStudent from '../Student/AddStudent'
import { fetchOneCampus, destroyOneCampus } from '../../reducers/campus'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CampusDetail extends Component {
  constructor(){
    super()
    this.state ={
      showForm: false
    }
  }

  componentWillMount() {
    const campusId = this.props.match.params.campusId;
    this.props.getCampusDetail(campusId);
  }

  handleClick(){
    if(this.state.showForm){
      this.setState({showForm:true})
    } else {
      this.setState({showForm: false})
    }
  }

  render() {
    const campus = this.props.campus
    console.log('Students:', campus.Students)
    return(
      <div className="single-campus campus">
        {
          campus.id && (
          <div>
            <h2>{campus.name}</h2>
            <img src={campus.image}></img>
            <ul className="students">
              {
                campus.Students && campus.Students.map((student) => {
                return <li key={student.id}>{student.name}</li>
              })}
            </ul>
            <button  onClick={() => this.onClick()}>addNewStudent</button>
            <button>Delete Campus!</button>
            <div>
              {
                this.state.showForm
                  ? <AddStudent />
                  : null
              }
            </div>
          </div>
          )
        }
      </div>
    )
  }
  onClick() {
    this.setState({showForm: !this.state.showForm});
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
