import '../../styles/components/ministries.sass'
import Marias from "./Marias"
import Infantol from "./Infantol"
import Young from "./Young"



const Ministries = () => {
  return (
    <section id="ministries">
        {/*Heading*/}
        <div className="pastoral-heading">
            <span className='section-subtitle'>Nossos</span>
            <h3 className='section-title'>Ministérios</h3>
        </div>
        <>
           <Marias />
           <Infantol/>
           <Young />
        </>
    </section>
  )
}

export default Ministries