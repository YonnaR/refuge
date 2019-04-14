import React from 'react'

export default () => {
  return (
    <section id="about" className="section-padding">
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center marb-35">
            <h1 className="header-h">Un Voyage au pay des saveurs Créoles</h1>
            <p className="header-p">George et Fortuna vous font découvrir des plats typiques, vous y retrouverez tout le caractère de nos îles dans une assiette qui satisfera les plus fin gourmets.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-10 row">
            <div className="col-md-6 col-sm-6">
                <div className="about-info">
                <h2 className="heading">Le Refuge en Katimini</h2>
                <p>Vous acceuille tout les midi au bourg de Saint-Louis dans un restaurant ou vous aurez les pieds dans le sable, une vue magnifique sur la Guadeloupe, une ambiance qui ne vous laissera pas indifferent ainsi qu'une cuisine dont vous vous souviendrez.</p>
                <div className="details-list">
                    <ul>
                    <li><i className="fa fa-check"></i>Un cadre hors-normes. </li>
                    <li><i className="fa fa-check"></i>Sur la plus belle plage de l'île.</li>
                    <li><i className="fa fa-check"></i>Une Cuisine traditionnelle typique.</li>
                    <li><i className="fa fa-check"></i>Une ambiance dont vous vous souviendrez.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6">
                <img src="/images/restau/poissonG.png" alt="poissong grillé et gratin de fruit a pain" style={{width:"100%"}} className="img-responsive"/>
            </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        </div>
    </section>

  )
}
