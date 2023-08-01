import '../../styles/components/pastoral.sass'
import Teachings from './Teachings'
import Deacons from './Deacons'


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
            <Deacons />
        </>
    </section>
  )
}

export default Pastoral