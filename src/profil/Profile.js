import React from 'react'

const Profile = (props) => {
  
      


  return (
    <div>
      <img src='avatar.png' style={{width: "100px",height:"100px"}}/>
      <h2>{props.fullname}</h2>  
      <h4>{props.bio}</h4>
      <h4>{props.profession}</h4>
      </div>
    
  )
}

export default Profile