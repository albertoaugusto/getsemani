
import Teachings from '../pastoral/Teachings'
import Deacons from '../pastoral/Deacons'
import Elders from '../pastoral/Elders'

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
            <Elders />
        </>
    </section>
  )
}

export default Pastoral