
import Teachings from '../pastoral/Teachings'

const Pastoral = () => {
  return (
    <section id="pastoral">
        {/*Heading*/}
        <div className="pastoral-heading">
            <span className='section-subtitle'>Pastoral</span>
            <h3 className='section-title'>Corpo Eclesiástico</h3>
        </div>
        <>
            <Teachings />
        </>
    </section>
  )
}

export default Pastoral