import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950" id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Footer />
      </main>
    </div>
  )
}

export default App
