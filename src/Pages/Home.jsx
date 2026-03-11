import Hero from "../Components/Hero"
import About from "../Components/About"
import Stats from "../Components/Statics.jsx"
import WhoCanApply from "../Components/WhoCanApply"
import FeaturedStartups from "../Components/FeaturedStartups"
import CTA from "../Components/CTA"
import Investors from "../Components/Investor.jsx"
import HowItWorks from "../Components/Work.jsx"
import BackToTop from "../Components/BackToTop"
function Home() {
  return (
    <>
      <Hero />
      <Stats/>
      <About />
      <HowItWorks />
      <WhoCanApply />
      <FeaturedStartups />
      <Investors/>
      <CTA />
      <BackToTop/>
    </>
  )
}

export default Home