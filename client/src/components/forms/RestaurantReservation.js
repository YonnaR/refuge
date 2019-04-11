import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <section id="contact" className="section-padding">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <h1 className="header-h">Réserver une table</h1>
                    <p className="header-p">Vous souhaitez manger un plat en particulier ou vous faire livrer?
                        <br/>Laissez nous un message dans le formulaire ci-contre afin d'expliquer votre demande
                        <br/> Nous vous recontacterons au plus vite. </p>
                    </div>
                </div>
                <div className="row msg-row">
                    <div className="col-md-4 col-sm-4 mr-15">
                        <div className="media-2">
                            <div className="media-left">
                            <div className="contact-phone bg-1 text-center"><span className="phone-in-talk fa fa-phone"></span></div>
                            </div>
                            <div className="media-body">
                                <h4 className="dark-blue regular">Phone Numbers</h4>
                                <p className="light-blue regular alt-p">+440 875369208 - <span className="contacts-sp">Phone Booking</span></p>
                            </div>
                        </div>
                        <div className="media-2">
                            <div className="media-left">
                            <div className="contact-email bg-14 text-center"><span className="hour-icon fa fa-clock-o"></span></div>
                            </div>
                            <div className="media-body">
                                <h4 className="dark-blue regular">Opening Hours</h4>
                                <p className="light-blue regular alt-p"> Monday to Friday 09.00 - 24:00</p>
                                <p className="light-blue regular alt-p">
                                    Friday and Sunday 08:00 - 03.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8">
                    <form action="" method="post" role="form" className="contactForm">
                        <div className="col-md-6 col-sm-6 contact-form pad-form">
                        <div className="form-group label-floating is-empty">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation"></div>
                        </div>
            
                        </div>
                        <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <input type="date" className="form-control label-floating is-empty" name="date" id="date" placeholder="Date" data-rule="required" data-msg="This field is required" />
                            <div className="validation"></div>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-6 contact-form pad-form">
                        <div className="form-group">
                            <input type="email" className="form-control label-floating is-empty" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validation"></div>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <input type="time" className="form-control label-floating is-empty" name="time" id="time" placeholder="Time" data-rule="required" data-msg="This field is required" />
                            <div className="validation"></div>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control label-floating is-empty" name="phone" id="phone" placeholder="Phone" data-rule="required" data-msg="This field is required" />
                            <div className="validation"></div>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-6 contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control label-floating is-empty" name="people" id="people" placeholder="People" data-rule="required" data-msg="This field is required" />
                            <div className="validation"></div>
                        </div>
                        </div>
                        <div className="col-md-12 contact-form">
                        <div className="form-group label-floating is-empty">
                            <textarea className="form-control" name="message" rows="5" rows="3" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validation"></div>
                        </div>
            
                        </div>
                        <div className="col-md-12 btnpad">
                        <div className="contacts-btn-pad center">
                            <button className="btn btn-primary">Réserver</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>    
        )
    }
}
