import React, { Component } from 'react'
import "../../assets/css/reservationFormColumn.css"
import Axios from 'axios';
import ErrorAlert from '../widgets/alert/ErrorAlert';
import SuccessAlert from '../widgets/alert/SuccessAlert'
import ValidationModal from '../widgets/modal/ValidationModal'

export default class ReservationFormColumn extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            mail:'',
            tel:'',
            message:'',
            adults:1,
            childrens:0,
            startDate:'',
            endDate:'',
            price:0,
            isValidationNeeded:false,
            successMsg:null,
            errMsg:null
        }
    }

    /* check if all forms inputs are completed carefully */
    checkFormIntegrity=()=>{

        /* email regexp for email checking */
        let emailRgxp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(this.state.firstName === ""){
            this.setState({
                errMsg:"entrez un prénom valide"
            })
        }
        else if(this.state.lastName === ""){
            this.setState({
                errMsg:"entrez un nom valide"
            })
        }
        else if(this.state.mail.match(emailRgxp)===null){
            this.setState({
                errMsg:"entrez une adresse mail valide"
            })
        }
        else if(this.state.telephone === ""){
            this.setState({
                errMsg:"entrez un numéro de téléphone valide"
            })
        }
        else if(this.state.adults === ""){
            this.setState({
                errMsg:"entrez un nombre d'adulte valide"
            })
        }
        else if(this.state.childrens === ""){
            this.setState({
                errMsg:"entrez un nombre d'enfant valide"
            })
        }
        else if(this.state.startDate === ""){
            this.setState({
                errMsg:"entrez une date de début de séjour valide"
            })
        }
        else if(this.state.endDate === ""){
            this.setState({
                errMsg:"entrez une date de fin de séjour valide"
            })
        }
        else{
            this.setState({
                isValidationNeeded:true
            })
        }

    }

    /* handle form send to serveur function */
    handleForm=()=>{

        /* Parse data for server */
        let data = this.state;
        data.tel = parseInt(data.tel);
        data.adults = parseInt(data.adults);
        data.childrens = parseInt(data.childrens);
        data.startDate = String(data.startDate);
        data.endDate = String(data.endDate)

        /* Post data */
        Axios.post("/reservation",data,{
            "httpsAgent": new Axios.httpsAgent.Agent({ keepAlive: true }),
        })
        .then((response)=>{
            this.setState({
                errMsg:null,
                successMsg:"Validation effectuée avec succès"
            })
            this.clearForm();
            this.handleCloseModal()
        })
        .catch((error)=>{
            this.setState({
                errMsg:error
            })
        })
    }

    /* Clear form handle function */
    clearForm=()=>{
        this.setState({
            firstName:'',
            lastName:'',
            mail:'',
            tel:'',
            message:'',
            adults:1,
            childrens:0,
            startDate:'',
            endDate:'',
            price:0
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
            isValidationNeeded:false
        })
    }


  render() {
    console.log(this.state)
    const {firstName , lastName , mail , tel , adults , childrens , startDate , endDate, message, errMsg, successMsg, isValidationNeeded, price } = this.state

    return (
        <div className="form">
            <h1 style={{textAlign:'center'}}>
                Vous serez bientot au soleil<br/>
                <small>
                    attention une taxe de séjour est applicable a votre arrivé depuis Janvier 2019
                </small>
            </h1>
            {/* Validation modal */}
            {isValidationNeeded?
                <ValidationModal
                    title="Confirmation de réservation"
                    message={`Vous êtes sur le point d'émettre une réservation. Souhaitez-vous continuer?`}
                    onConfirm={this.handleForm}
                    onCancel={this.handleCloseModal}
                    onClose={this.handleCloseModal}
                />:<span></span>}
            {/* Display error message */}
            <div className="container-fluid">
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
                
            <div className="contentform">    

                <div className="leftcontact">
                    <div className="form-group">
                        <p>Prénom<span>*</span></p>
                        <span className="icon-case">
                            <i className="fa fa-male"></i>
                        </span>
                        <input 
                            type="text" 
                            required="" 
                            value={firstName} 
                            onChange={(e)=>this.setState({firstName : e.target.value})} 
                            placeholder="Prénom"
                            />
                        <div className="validation"></div>
                    </div> 
        
                    <div className="form-group">
                        <p>E-mail <span>*</span></p>	
                        <span className="icon-case">
                            <i className="fa fa-envelope-o"></i>
                        </span>
                        <input 
                            type="email" 
                            value={mail} 
                            onChange={(e)=>this.setState({mail : e.target.value})}  
                            placeholder="E-mail"
                        />
                        <div className="validation"></div>
                    </div>	

                    <div className="form-group">
                        <p>Début <span>*</span></p>
                        <span className="icon-case">
                            <i className="fas fa-calendar-alt"></i>
                        </span>
                        <input type="date" 
                            value={startDate} 
                            onChange={(e)=>this.setState({startDate : e.target.value})}  
                            placeholder="date de début" 
                        />
                        <div className="validation"></div>
                    </div> 

                    <div className="form-group">
                        <p>Adultes <span>*</span></p>	
                        <span className="icon-case">
                            <i className="fas fa-male"></i>
                        </span>
                        <select 
                            value={adults} 
                            onChange={(e)=>this.setState({adults : e.target.value})} 
                        > 
                            <option default value={1}>1 Adulte</option>
                            <option value={2}>2 Adultes</option>
                            <option value={3}>3 Adultes</option>
                            <option value={4}>4 Adultes</option>
                        </select>
                        <div className="validation"></div>
                    </div>

                    <div className="form-group">
                    <p>Enfants <span>*</span></p>	
                    <span className="icon-case">
                        <i className="fas fa-child"></i>
                    </span>
                    <select 
                        value={childrens} 
                        onChange={(e)=>this.setState({childrens : e.target.value})} 
                    > 
                        <option value={0}>0 Enfants</option>
                        <option value={1}>1 Enfants</option>
                        <option value={2}>2 Enfants</option>
                        <option value={3}>3 Enfants</option>
                        <option value={4}>4 Enfants</option>
                    </select>
                    <div className="validation"></div>
                    </div>
                </div>
        
                <div className="rightcontact">	
        
                    <div className="form-group">

                        <div className="form-group">
                            <p>Nom<span>*</span></p>
                            <span className="icon-case">
                                <i className="fa fa-male"></i>
                            </span>
                            <input 
                                type="text" 
                                required="" 
                                value={lastName} 
                                onChange={(e)=>this.setState({lastName : e.target.value})} 
                                placeholder="Prénom"
                                />
                            <div className="validation"></div>
                        </div> 
        
                        <div className="form-group">
                            <p>téléphone<span>*</span></p>	
                            <span className="icon-case">
                                <i className="fa fa-phone"></i>
                            </span>
                            <input 
                                type="number" 
                                value={tel} 
                                onChange={(e)=>this.setState({tel : e.target.value})} placeholder="Numéro de téléphone"
                            />
                            <div className="validation"></div>
                        </div>
        
                        <div className="form-group">
                            <p>Fin <span>*</span></p>
                            <span className="icon-case">
                                <i class="fas fa-calendar-alt"></i>
                            </span>
                            <input 
                                type="date" 
                                value={endDate} 
                                onChange={(e)=>this.setState({endDate : e.target.value})} 
                                placeholder="date de fin" 
                            />
                            <div className="validation"></div>
                        </div>
                
                        <div className="form-group">
                            <p>Message <span>*</span></p>
                            <span className="icon-case">
                                <i className="fa fa-comments-o"></i>
                            </span>
                            <textarea 
                                value={message} 
                                onChange={(e)=>this.setState({message : e.target.value})}  
                                placeholder="Ajouter un message a votre réservation" 
                                rows="4" >
                            </textarea>
                            <div className="validation"></div>
                        </div>	
                </div>
            </div>
            <button 
                onClick={this.checkFormIntegrity} className="bouton-contact">
                Réserver
            </button>
        </div>
    </div>	
    )
  }
}
