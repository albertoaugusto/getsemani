import '../../styles/components/suport.sass'
import Cvv from '../../assets/cvv.png'

const Suport = () => {
  return (
    <section className="about" id="suport">
        <div className="pastoral-heading">
            <span className='section-subtitle'>Apoio Emocional</span>
            <h3 className='section-title'>Centro de Valorização da Vida </h3>
        </div>
        <div className="about-container container grid">
            <img src={Cvv} alt="cvv-photo" className="about-img" />
            <div className="about-data">
                <p className="about-description">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Omnis temporibus consequuntur in architecto necessitatibus. 
                   Eveniet, ut quo nobis dolorem eaque beatae dolore. 
                   Saepe deleniti earum praesentium!
                   Recusandae voluptates nihil deleniti?
                </p>
                <a className="a button button-flex">
                    Entrar em Contato
                    {/*button icon*/} 
                </a>
            </div>
        </div>
    </section>
  )
}

export default Suport