import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-indigo-50">
      <Navbar />
      <Hero />
      <Sections />
    </div>
  )
}

export default App
