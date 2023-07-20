import '../../styles/components/church.sass'
import CardMission from '../../assets/missao-da-igreja.jpg'
import CardVision from '../../assets/visao-igreja.jpg'
import CardValues from '../../assets/valores-igreja.jpg'

const Church = () => {
  return (
   
        
    <section id="church">
        {/*Heading*/}
        <div className="church-heading">
            <span className='section-subtitle'>Nossa</span>
            <h3 className='section-title'>Missão, Visão e Valores</h3>
        </div>
        {/*cards*/}
        <div className="cards-container">
            {/*card 1*/}
            <div className="card">
                {/*image */}
                <div className="card-img">
                    <img src={CardMission} alt="missao" />
                </div>
                {/*content*/}
                <div className="card-text">
                    <span>Nossa <br/> Missão</span>
                    <p>
                        Promover de forma clara e objetiva o evangelho de 
                        Jesus Cristo ao mundo, com o propósito de transformar vidas 
                        através da palavra de Deus.
                    </p>
                </div>
            </div>
            {/*card 2*/}
            <div className="card">
                {/*image */}
                <div className="card-img">
                    <img src={CardVision} alt="visao" />
                </div>
                {/*content*/}
                <div className="card-text">
                    <span>Nossa <br/> Visão</span>
                    <p>
                        Entendemos que o ensinamento da palavra de Deus é primordial
                        para preparar o cristão nos caminhos de jesus cristo, de maneira
                        que este tenha a autonomia de discernir por meio do discipulado,
                        a conduta e deveres de um servo de Cristo.
                    </p>
                </div>
            </div>
            {/*card 3*/}
            <div className="card">
                {/*image */}
                <div className="card-img">
                    <img src={CardValues} alt="visao" />
                </div>
                {/*content*/}
                <div className="card-text">
                    <span>Nossos <br/> Valores</span>
                    <p>
                        O amor, a fé e a graça de Deus são valores inegociáveis,
                        não há barganhas no reino de Deus, a pureza da palavra, 
                        bem como a sua eficácia devem ser preservadas.
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Church