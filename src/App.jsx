import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Content from "./Components/Content"
import Technologies from "./Components/Technologies"
import Experiences from "./Components/Experiences"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Blogs from "./Components/Blogs"
import Certifications from './Components/Certifications'

const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full
       w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-8"></div>
          <Navbar />
          <About />
          <Content />
          <Technologies />
          <Experiences />
          <Projects />
          <Certifications />
          <Contact />
          
        </div>
      </div>
  )
}

export default App
