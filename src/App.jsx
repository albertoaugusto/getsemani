import '../src/styles/main.sass'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Church from './components/church/Church'
import Pastoral from './components/pastoral/Pastoral'
import Ministries from './components/minstries/Ministries'
import Events from './components/events/Events'
import Suport from './components/suport/Suport'
import Devotionals from './components/devotionals/Devotionals'

function App() {
  return (
   <>
    <Header />
    <Banner />
   
    <main className='main'>
        <Church />
        <Pastoral/>
        <Ministries/>
        <Events/>
        <Suport/>
        <Devotionals/>
    </main>
   
   </>
  )
}

export default App
