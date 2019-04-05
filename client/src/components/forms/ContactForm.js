import React, { Component } from 'react'
import Axios from 'axios';
import "../../assets/css/contactForm.css"
import ValidationModal from '../widgets/modal/ValidationModal';
import ErrorAlert from '../widgets/alert/ErrorAlert';
import SuccessAlert from '../widgets/alert/SuccessAlert';

export default class ContactForm extends Component {

  constructor(props){
    super(props);
    this.state={
        name:'',
        tel:'',
        subject:'',
        message:'',
        from:'',
        modalVis:false,
        successMsg:null,
        errMsg:null
    }
  }

  checkForm=()=>{
    const { name, tel, subject, message, from } = this.state;

    /* email regexp for email checking */
    let emailRgxp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(name === ""){
      this.setState({
        errMsg:"Entrez un nom valide"
      })
    }else if(tel === "" ){
      this.setState({
        errMsg:"Entrez un numéro de télphone valide"
      })
    }else if(subject ===""){
      this.setState({
        errMsg:"Entrez un sujet valide"
      })
    }else if(message === ""){
      this.setState({
        errMsg:"Entrez un message"
      })
    }else if(from.match(emailRgxp)===null){
      this.setState({
        errMsg:"Entrez un mail valide"
      })
    }else{
      this.setState({
        modalVis:true,
      })
    }
  }
  handleForm=()=>{
    let data = this.state;
    data.tel = parseInt(data.tel);
    data.to="yoann.forthulman@gmail.com";

    Axios.post("/infos",data)
    .catch((error)=>{
      this.setState({
        errMsg:error
      })
    })
    .then((response)=>{
      console.log(response)
        this.setState({
          successMsg:response.data,
          modalVis:false,
        })
    })
    .then(()=>this.clearForm())
  }

  clearForm=()=>{
      this.setState({
          name:'',
          tel:'',
          subject:'',
          message:'',
          from:'',
          successMsg:null,
          errMsg:null,
          modalVis:false
      })
  }
  /* clear tool tips */
  handleClearToolTip=()=>{
    this.setState({
        errMsg:null,
        successMsg:null
    })
  }

  handleCloseModal=()=>{
      this.setState({
          modalVis:false
      })
  }

  render() {
    console.log(this)
    const { name, tel, subject, message, from, successMsg, errMsg, modalVis } = this.state;
    return (
      <div className="contact1">
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" data-tilt>
            <img src="images/logo.png" alt="IMG"/>
          </div>

          <div className="contact1-form validate-form">
              {/* Validation modal */}
              {modalVis?
                <ValidationModal
                    title="Confirmation de réservation"
                    message={`Vous êtes sur le point d'envoyer un message de prise de contact. Souhaitez-vous continuer?`}
                    onConfirm={this.handleForm}
                    onCancel={this.handleCloseModal}
                    onClose={this.handleCloseModal}
                />:<span></span>}
            <div className="container-fluid">
              {/* Display error message */}
              {errMsg !== null? <ErrorAlert 
                  msg={errMsg} 
                  onClose={this.handleClearToolTip} 
              />:<span></span>}
              {/* Display success message */}
              {successMsg !== null? <SuccessAlert 
                  msg={successMsg} 
                  onClose={this.handleClearToolTip} 
              />:<span></span>}
            </div>

            <div className="wrap-input1 validate-input">
              <input 
                className="input1" 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(e)=>this.setState({name : e.target.value})}/>
                
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <input 
                className="input1" 
                type="text" 
                placeholder="Email"
                value={from}
                onChange={(e)=>this.setState({from : e.target.value})} />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <input 
                className="input1" 
                type="telephone" 
                placeholder="Télephone"
                value={tel}
                onChange={(e)=>this.setState({tel : e.target.value})} />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <input 
                className="input1" 
                type="text" 
                placeholder="Sujet"
                value={subject}
                onChange={(e)=>this.setState({subject:e.target.value})} />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <textarea 
                className="input1" 
                placeholder="Message"
                value={message}
                onChange={(e)=>this.setState({message:e.target.value})}>
              </textarea>
              <span className="shadow-input1"></span>
            </div>

            <div className="container-contact1-form-btn">
              <button className="contact1-form-btn" onClick={this.checkForm}>
                <span>
                  Envoyer
                  <i className="fa fa-long-arrow-right"></i>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>

    )
  }
}
