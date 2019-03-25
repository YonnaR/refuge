import React, { Component } from 'react'
import Axios from 'axios';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            tel:'',
            subject:'',
            message:'',
            from:'',
        }
    }
    handleForm=()=>{
        const { name, tel, subject , message, from} = this.state
        if(name!==""&&tel!==""&&subject!==""&&message!==""&&from!==""){
            let data = this.state;
            data.tel = parseInt(data.tel);
            data.to="yoann.forthulman@gmail.com";
    
            Axios.post("/infos",data)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            alert("veuillez remplir tout les champs")
            return
        }
        this.clearForm()

    }
    clearForm=()=>{
        this.setState({
            name:'',
            tel:'',
            subject:'',
            message:'',
            from:''
        })
    }      
  render() {
    const { name, tel, subject , message, from} = this.state
    return (
        <section className="contact-block">
            <div className="container">
                <div className="text-head">
                    <h1>Nous contacter</h1>
                </div>

            </div>
            <div className="contact-block-full-image" id="contact">
                <div className="container">
                    <div name="sentMessage" id="contactForm">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="text"value={name} onChange={(e)=>this.setState({name : e.target.value})} className="form-control" placeholder="Nom" required="" aria-invalid="false"/>   >
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="text" value={tel} onChange={(e)=>this.setState({tel : e.target.value})} id="contact1" className="form-control" placeholder="Téléphone" required=""/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="email" value={from} onChange={(e)=>this.setState({from : e.target.value})} id="email1" className="form-control" placeholder="E-mail" required=""/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <input type="text" value={subject} onChange={(e)=>this.setState({subject : e.target.value})} id="category1" className="form-control" placeholder="Sujet" required=""/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" value={message} onChange={(e)=>this.setState({message : e.target.value})} id="message1" className="form-control" rows="4" placeholder="Message" required="" aria-invalid="false"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div id="success"></div>
                        <div className="text-center">
                            <button onClick={this.clearForm} className="btn btn-lg btn-button">Nettoyer</button>
                            <button onClick={this.handleForm} className="btn btn-lg btn-button">Envoyer</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="clearfix"></div>
        </section>
    )
  }
}
