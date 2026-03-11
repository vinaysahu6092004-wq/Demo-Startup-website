import Hero from "../Components/Hero"
import About from "../Components/About"
import HowItWorks from "../Components/HowitWorks"
import WhoCanApply from "../Components/WhoCanApply"
import FeaturedStartups from "../Components/FeaturedStartups"
import CTA from "../Components/CTA"
import Investors from "../Components/Investor"
import Stats from "../Components/stats"
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