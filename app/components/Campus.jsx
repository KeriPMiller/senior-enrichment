import React from 'react'

export default function Campus (props){
  const campus = props.campus;

  return(
    <li>
      <div>
        <h4>{campus.name}</h4>
        {campus.image}
      </div>
    </li>
  )
}
