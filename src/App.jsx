import CrytoList from './components/CrytoList'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="flex flex-col w-screen">
      <NavBar />
      <Hero />
      <CrytoList />
    </div>
  )
}

export default App
