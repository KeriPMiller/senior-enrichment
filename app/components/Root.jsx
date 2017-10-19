import React, { Component } from 'react'
import NavBar from './NavBar'

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    < NavBar />
    {children}
  </div>
)
export default Root

// export default class Root extends Component {
//
//   // componentDidMount(){
//   //   const campusThunk = fetchCampuses();
//   //   store.dispatch(campusThunk)
//   // }
//   render(){
//     return(
//       <div>
//         <NavBar />
//         <main>
//           <Router>
//             <Switch>
//               <Route path="/home" component={CampusList} />
//             </Switch>
//           </Router>
//         </main>
//       </div>
//     )
//   }
// }
