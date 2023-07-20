import '../src/styles/main.sass'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Church from './components/church/Church'


function App() {
  return (
   <>
    <Header />
    <Banner />
   
   <main className='main'>
      <Church />
   </main>
   
   </>
  )
}

export default App
