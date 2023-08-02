import '../../styles/components/devotionals.sass'
import YtLogo from '../../assets/Youtube_logo.png'

const Suport = () => {
  return (
    <section className="about" id="devotionals">
        <div className="pastoral-heading">
            <span className='section-subtitle'>Vídeos</span>
            <h3 className='section-title'>Devocionais </h3>
        </div>
        <div className="about-container container grid">
            <div className="about-data">
                <p className="about-description">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Omnis temporibus consequuntur in architecto necessitatibus. 
                   Eveniet, ut quo nobis dolorem eaque beatae dolore. 
                   Saepe deleniti earum praesentium!
                   Recusandae voluptates nihil deleniti?
                </p>
                <a className="a button button-flex">
                    Acessar o Canal
                    {/*button icon*/} 
                </a>
            </div>
            <img src={YtLogo} alt="cvv-photo" className="about-img" />
        </div>
    </section>
  )
}

export default Suport