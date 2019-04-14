import React, { Component } from 'react'
import Axios from 'axios';
import ErrorAlert from '../widgets/alert/ErrorAlert';
import SuccessAlert from '../widgets/alert/SuccessAlert';
import ValidationModal from '../widgets/modal/ValidationModal';

import "../../assets/css/reservationFormColumn.css";
import FormWidget from '../widgets/FormWidget';

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
        Axios.post("/reservation-gites",data)
        .catch((error)=>{
            this.setState({
                errMsg:error,
                isValidationNeeded:false
            })
        })
        .then((response)=>{
            this.setState({
                errMsg:null,
                successMsg:"Réservation effectuée avec succès"
            });
        })
        .then(()=>{
            this.clearForm();
            this.handleCloseModal();
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
            endDate:''
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
    const {firstName , lastName , mail , tel , adults , childrens , startDate , endDate, message, errMsg, successMsg, isValidationNeeded } = this.state
    return (
        <section id="reservation-restau" className="section-padding">
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <h1 className="header-h">Réserver un gîte</h1>
                <p className="header-p">Vous avez une requête en particulier? un bébé? des questions?
                    <br/>Laissez nous un message dans le formulaire ci-contre afin d'expliquer votre demande.
                    <br/> Nous vous recontacterons au plus vite. </p>
                </div>
            </div>
                <div className="row msg-row">
                <FormWidget/>
                <div className="col-md-8 col-sm-8">
                <div className="contactForm">
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

                    <div className="col-md-6 col-sm-6 contact-form pad-form">
                        <div className="form-group label-floating is-empty">
                            <input 
                                type="text" 
                                name="firstname" className="form-control" 
                                placeholder="Prénom"
                                value={firstName}
                                onChange={(e)=>this.setState({firstName:e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 contact-form pad-form">
                        <div className="form-group label-floating is-empty">
                            <input 
                                type="text" 
                                name="lastname" className="form-control" 
                                placeholder="Nom"
                                value={lastName}
                                onChange={(e)=>this.setState({lastName:e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <label>Début</label>
                            <input 
                                type="date" 
                                className="form-control label-floating is-empty" name="startDate"
                                value={startDate}
                                onChange={(e)=>this.setState({startDate:e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <label>Fin</label>
                            <input 
                                type="date" 
                                className="form-control label-floating is-empty" name="date"
                                value={endDate}
                                onChange={(e)=>this.setState({endDate:e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 contact-form pad-form">
                        <div className="form-group">
                            <input 
                                type="email" className="form-control label-floating is-empty" name="email"
                                placeholder="Email" 
                                value={mail}
                                onChange={(e)=>this.setState({mail:e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control label-floating is-empty" name="phone"
                                placeholder="Téléphone" 
                                value={tel}
                                onChange={(e)=>this.setState({tel:e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <label>Adultes</label>
                            <input 
                            type="number" 
                            className="form-control label-floating is-empty" 
                            name="adultes" 
                            placeholder="nombre d'adultes'"
                            value={adults}
                            onChange={(e)=>this.setState({adults:e.target.value})} 
                            />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <label>Enfants</label>
                            <input 
                            type="number" 
                            className="form-control label-floating is-empty" 
                            name="enfants" 
                            placeholder="nombre d'enfants"
                            value={childrens}
                            onChange={(e)=>this.setState({childrens:e.target.value})} 
                            />
                        </div>
                    </div>

                    <div className="col-md-12 contact-form">
                    <div className="form-group label-floating is-empty">
                        <textarea 
                        className="form-control" 
                        name="message" 
                        rows="5" 
                        rows="3" 
                        placeholder="Message"
                        value={message}
                        onChange={(e)=>this.setState({message:e.target.value})}
                        ></textarea>
                    </div>

                    </div>
                    <div className="col-md-12 btnpad">
                    <div className="contacts-btn-pad center">
                        <button className="btn btn-primary" onClick={this.checkFormIntegrity} >Réserver</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
