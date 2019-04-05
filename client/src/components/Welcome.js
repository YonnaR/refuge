import React, { Component } from 'react'
import '../assets/css/modal.css'

export default class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
            modalV:false
        }
    }
    handleModal=()=>this.setState((prevState)=>{
        return{
            modalV:!prevState.modalV
        }
    })
  render() {
    const { modalV } = this.state;
    return (
        <section className="welcome-block">
 
            {modalV?<div className="modal-container"> 
                <button className="close-modal-button button-danger" onClick={()=>this.handleModal()} ><i className="fas fa-times fa-2x red close-modal"></i></button>   
                <div className="modal-area">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="title-name">
                                <h1 className="text-center">Marie-Galante</h1>
                                <h5 className="text-center">Un REFUGE paradisiaque</h5>
                            </div>
                            <div className="single-blog-image">
                                <img src="/images/excursion/banner1.jpg" className="banner-responsive" alt="web site banner"/>
                            </div>
                            <div className="subtitle">
                                <br/>
                                <p>
                                    Marie-Galante, île de l'archipel de la Guadeloupe dans la mer des Antilles s'étend sur une superficie
                                    de 158 km². Sa forme ronde et aplatie lui doit le surnom de la Grande Galette. En la découvrant dans
                                    toute sa splendeur, le 03 novembre 1493 Christophe Colomb lui donne le nom de sa caravelle MARIA GALANDA.
                                </p>
                                <p>
                                    A vocation agricole, avec une usine sucrière, trois distilleries, des cultures vivrières et la pêche, Marie-Galante la rurale s'ouvre au Tourisme. 
                                    Ses trois localités principales, Capesterre, Saint-Louis et son chef lieu Grand-bourg se déploient en bordure de mer.arie-Galante est aussi appelée l'île aux cent moulins. 
                                    En réalité, on dénombre les vestiges d'un peu plus d'une centaine de moulins à vent autrefois destinés à broyer la canne à sucre qui demeure la principale richesse de l'île.
                                </p>
                                <blockquote>Avec une usine sucrière, trois distilleries, des cultures vivrières et la pêche, Marie-Galante la rurale s'ouvre au Tourisme. Ses trois localités principales, Capesterre, Saint-Louis et son chef lieu Grand-bourg se déploient en bordure de mer.</blockquote>
                                <p>
                                    Ainsi, sur le territoire de la plus ancienne bourgade de l'île, là où les cinquante premiers colons ont tenté de s'établir en 1648, Saint-Louis se prélasse en bordure d'une superbe baie qui porte son nom. 
                                </p>
                                <p>
                                    Ici, on dirait que le temps s'est arrété, riche de ses rebondissements historiques, paisible et accueillante, la vie est à peine perturbée par l'arrivée des navettes qui la relient en une heure de Pointe-à-Pitre ou Saint-François.
                                </p>
                                <p>
                                    Pour arriver jusqu'à nous, à cinq minutes de l'embarcadère de Saint-Louis, à 10 mn de Grand-bourg, prenez la nationale 9 jusqu'à la section Saint-Charles, route des sources.
                                    Dans un cadre magnifique, entre cocotiers, flamboyants et arbres fruitiers entre miroitement de la mer et plumets argentés de cannes à sucre.
                                </p>
                                <br/><br/>
                                <h2 className="text-center">Georges et Fortuna vous accueillent au REFUGE.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:<span></span>}
            <div className="container">
            <div className="text-head">
                <h1>PASSEZ VOS VACANCES LÀ OÚ HABITENT LES AUTRES !</h1>
            </div>

            <div className="welcome-block-full-image">
                <div>
                    <p>Ici vous ètes chez vous. 
                    Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agrèable, une atmosphère chaleureuse,
                    une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons.</p>
                    <div className="center">
                        <button className="btn btn-primary" href="/" onClick={this.handleModal}>Voir plus</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>        
    </section>
    )
  }
}
