import '../../styles/components/teachings.sass'
import Card1 from '../../assets/pr-luiz.png'
import Card2 from '../../assets/vice-carlos.png'
{/*import foto pr washingyon*/}
import Card3 from '../../assets/pr-suelma-washington.png'
import Card4 from '../../assets/vice-pb-clovis.png'
import Card5 from '../../assets/sec-ricardo.png'

const Teachings = () => {
  return (
    <section id="teachings">
        {/*Heading*/}
        <div className="pastoral-heading">
            <h4 className='sub-section'>Ensinamentos</h4>
        </div>
        {/*cards*/}
        <div className="cards-container">
            {/*card1*/}
            <div className="card-teach">
                <img src={Card1} alt="pr-luis-claudio" className='card-teach-img'/>
                <div className="card-text-teach">
                    <h5>Presidente - Pr. Luiz Caludio</h5>
                    <p>
                        Formado em letras, Física, mestre em filosofia.
                    </p>
                </div>    
            </div>
            {/*card2*/}
            <div className="card-teach">
                <img src={Card2} alt="vice-carlos-gomes" className='card-teach-img'/>
                <div className="card-text-teach">
                    <h5>Vice-presidente - Carlos Gomes</h5>
                    <p>
                        Mestre em Letras.
                    </p>
                </div>    
            </div>
            {/*card3*/}
            <div className="card-teach">
                <img src={Card3} alt="pr-luis-claudio" className='card-teach-img'/>
                <div className="card-text-teach">
                    <h5>Pr. Washington Carvalho</h5>
                    <p>
                        Bacharel em teologia.
                    </p>
                </div>    
            </div>
            {/*card4*/}
            <div className="card-teach">
                <img src={Card4} alt="pr-luis-claudio" className='card-teach-img'/>
                <div className="card-text-teach">
                    <h5>Vice-presidente - Pb. Clóvis Gomes</h5>
                    <p>
                        Mestre em Hebraico.
                    </p>
                </div>    
            </div>
            {/*card5*/}
            <div className="card-teach">
                <img src={Card5} alt="pr-luis-claudio" className='card-teach-img'/>
                <div className="card-text-teach">
                    <h5>Secretário - Ricardo Soares</h5>
                    <p>
                        Formado em letras, Física, mestre em filosofia.
                    </p>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Teachings