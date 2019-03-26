import React from 'react'

export default ( props ) => {
  return (
    <div className="alert alert-success" onClick={props.onClose} role="alert">
      <h4 style={{textAlign:"center"}}>{ props.msg }</h4>
    </div>
  )
}
