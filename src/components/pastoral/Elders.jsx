import '../../styles/components/elders.sass'
import Card1 from '../../assets/ev-adeilton.png'

const Elders = () => {
  return (
    <section id="elders">
        {/*Heading*/}
        <div className="pastoral-heading">
            <h4 className='sub-section'>Diáconos e Evangelistas</h4>
        </div>
        {/*cards*/}
        <div className="cards-container">
            {/*card1*/}
            <div className="card-elders">
                <img src={Card1} alt="pr-luis-claudio" className='card-elders-img'/>
                <div className="card-text-elders">
                    <h5>Ev. Rogério Souza</h5>
                    <p>
                        Evangelista da Igreja GetSemani
                    </p>
                </div>    
            </div>
        </div>    
    </section>        
  )
}

export default Elders