import '../../styles/components/deacons.sass'
import Card1 from '../../assets/diac-rogerio.png'
import Card2 from '../../assets/diac-ivanildo.png'
import Card3 from '../../assets/diac-paulo.png'
import Card4 from '../../assets/ev-adeilton.png'

const Deacons = () => {
  return (
    <section id="deacons">
        {/*Heading*/}
        <div className="pastoral-heading">
            <h4 className='sub-section'>Diáconos e Evangelistas</h4>
        </div>
        {/*cards*/}
        <div className="cards-container">
            {/*card1*/}
            <div className="card-deacons">
                <img src={Card1} alt="pr-luis-claudio" className='card-deacons-img'/>
                <div className="card-text-deacons">
                    <h5>Diác. Rogério Souza</h5>
                    <p>
                        Diácono da Igreja GetSemani
                    </p>
                </div>    
            </div>
            {/*card2*/}
            <div className="card-deacons">
                <img src={Card2} alt="vice-carlos-gomes" className='card-deacons-img'/>
                <div className="card-text-deacons">
                    <h5>Diác. Ivanildo Cabral</h5>
                    <p>
                       Diácono da Igreja GetSemani
                    </p>
                </div>    
            </div>
            {/*card3*/}
            <div className="card-deacons">
                <img src={Card3} alt="pr-luis-claudio" className='card-deacons-img'/>
                <div className="card-text-deacons">
                    <h5>Diác. Paulo Henrique Pereira</h5>
                    <p>
                        Diácono da Igreja GetSemani
                    </p>
                </div>    
            </div>
             {/*card4*/}
            <div className="card-deacons">
                <img src={Card4} alt="pr-luis-claudio" className='card-deacons-img'/>
                <div className="card-text-deacons">
                    <h5>Ev. Adenilton Nogueira</h5>
                    <p>
                        Evangelista da Igreja GetSemani
                    </p>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Deacons