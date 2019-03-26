
import React from 'react'

export default (props) => {
  return (
    <div className="modal fade show" style={{display:'block'}} tabindex="-1">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">
                    {props.title}
                </h5>
                <button 
                    type="button" 
                    className="close" 
                    onClick={props.onClose}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>
                    {props.message}
                </p>               
            </div>
            <div className="modal-footer">
                <button 
                    type="button" 
                    className="btn btn-success" 
                    onClick={props.onConfirm}
                >Oui</button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={props.onCancel}
                >Non</button>
            </div>
            </div>
        </div>
    </div>
  )
}