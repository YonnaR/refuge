import React from 'react'

export default ( props ) => {
  return (
    <div className="alert alert-success" style={{margin:"20px"}} onClick={props.onClose} role="alert">
      <h4 style={{textAlign:"center"}}>{ props.msg }</h4>
    </div>
  )
}
