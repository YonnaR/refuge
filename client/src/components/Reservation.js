import React, { Component } from 'react'
import Axios from 'axios';

export default class Reservation extends Component {
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
            endDate:''
        }
    }
    handleForm=()=>{
        const {firstName , lastName , mail , tel, startDate , endDate } = this.state

        if(firstName !== "" && lastName!=="" && mail !== "" && tel!== "" && startDate !== ""&& endDate !== ""){
            let data = this.state;
            data.tel = parseInt(data.tel);
            data.adults = parseInt(data.adults);
            data.childrens = parseInt(data.childrens);
            data.startDate = String(data.startDate);
            data.endDate = String(data.endDate)
    
    
            console.log(typeof(data.tel))
            Axios.post("/reservation",data)
            .then((response)=>{
                console.log(response)
                this.clearForm();
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            alert("veuillez remplire tout les champs");
            return
        }
        this.clearForm()
    }
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
  render() {
      const {firstName , lastName , mail , tel , adults , childrens , startDate , endDate, message } = this.state
    return (
        <section className="book-block" id="reservation">
            <div className="container">
                <div className="text-head">
                    <h1>Réservation:</h1>
                </div>

            </div>
            <div className="book-block-full-image">
                <div className="container">
                    <div id="contactForm" >
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="text" required="" value={firstName} onChange={(e)=>this.setState({firstName : e.target.value})} placeholder="Prénom" className="form-control" id="name"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="text" value={lastName} onChange={(e)=>this.setState({lastName : e.target.value})}  placeholder="Nom" className="form-control"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="email" value={mail} onChange={(e)=>this.setState({mail : e.target.value})}  placeholder="E-mail" className="form-control" id="email"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="number" value={tel} onChange={(e)=>this.setState({tel : e.target.value})} placeholder="Téléphone" className="form-control" id="tel"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="date" value={startDate} onChange={(e)=>this.setState({startDate : e.target.value})}  placeholder="date de début" className="form-control" id="bookdate"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="date" value={endDate} onChange={(e)=>this.setState({endDate : e.target.value})} placeholder="date de fin" className="form-control" id="yourdate"/>>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <select className="form-control" id="exampleFormControlSelect1" value={adults} onChange={(e)=>this.setState({adults : e.target.value})} > 
                                    <option default value={1}>1 Adulte</option>
                                    <option value={2}>2 Adultes</option>
                                    <option value={3}>3 Adultes</option>
                                    <option value={4}>4 Adultes</option>
                                    <option value={5}>5 Adultes</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <select className="form-control" value={childrens} onChange={(e)=>this.setState({childrens : e.target.value})} id="exampleFormControlSelect1"> 
                                    <option value={0}>0 Enfants</option>
                                    <option value={1}>1 Enfants</option>
                                    <option value={2}>2 Enfants</option>
                                    <option value={3}>3 Enfants</option>
                                    <option value={4}>4 Enfants</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        <div className="form-group">
                            <textarea aria-invalid="false" value={message} onChange={(e)=>this.setState({message : e.target.value})}  placeholder="Ajouter un message a votre réservation" rows="4" className="form-control"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div id="success"></div>
                        <div className="text-center">
                            <button className="btn btn-lg btn-button" onClick={()=>this.handleForm()}>Envoyer</button>
                            <button className="btn btn-lg btn-button" onClick={()=>this.clearForm()}>Nettoyer</button>
                            
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
  }
}
