import '../../styles/components/events.sass'
import Baptism from './Baptism'
const Events = () => {
  return (
   <section id="events">
        {/*Heading*/}
        <div className="pastoral-heading">
            <span className='section-subtitle'>Nossos</span>
            <h3 className='section-title'>Eventos</h3>
        </div>
        <>
           <Baptism/>
        </>
    </section>
  )
}

export default Events