import '../src/styles/main.sass'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Church from './components/church/Church'
import Pastoral from './components/pastoral/Pastoral'

function App() {
  return (
   <>
    <Header />
    <Banner />
   
   <main className='main'>
      <Church />
      <Pastoral/>
   </main>
   
   </>
  )
}

export default App
