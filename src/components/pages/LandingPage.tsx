import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Bio from '../sections/Bio'
import  Experiences from "../sections/Experience"
import Footer from '../sections/Footer'


export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Bio />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
}

