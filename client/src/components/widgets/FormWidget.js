import React from 'react'

export default () => {
  return (
    <div className="col-md-4 col-sm-4 mr-15">
        <a href="tel:+590590970502" className="media-2">
            <div className="media-left">
            <div className="contact-phone bg-1 text-center"><span className="phone-in-talk fa fa-phone"></span></div>
            </div>
            <div className="media-body">
                <h4 className="dark-blue regular">Téléphone:</h4>
                <p className="light-blue regular alt-p">+590 590970502 - <span className="contacts-sp">Phone Booking</span></p>
            </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Refuge+Hulman/@15.9515931,-61.322533,14z/data=!4m5!3m4!1s0x8c6b5554842a4e2b:0xf3da9eea9326041c!8m2!3d15.9412131!4d-61.3067463?hl=fr" className="media-2">
            <div className="media-left">
            <div className="contact-email bg-14 text-center"><span className="hour-icon fas fa-map-marker-alt"></span></div>
            </div>
            <div className="media-body">
                <h4 className="dark-blue regular">Heures D'ouverture:</h4>
                <p className="light-blue regular alt-p"> Du Lundi au Dimanche 11.00 - 16:00</p>
                <p className="light-blue regular alt-p">
                    Du Lundi au Samedi 19.30 - 22:00
                </p>
            </div>
        </a>
    </div>
  )
}
