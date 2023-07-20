import BannerImg from '../../assets/banner-getsemani.svg'
import '../../styles/components/banner.sass'

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Igreja GetSemani</h1>
      <img src={BannerImg} alt='banner' className='banner-img'/>
    </div>        
  )
}

export default Banner