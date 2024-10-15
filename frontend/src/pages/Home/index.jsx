import Header from "../../components/Header"
import About from "./About"
import Experiences from "./Experiences"
import Intro from "./Intro"


const Home = () => {
  return (
    <div className="bg-primary px-40">
      <Header />
      <Intro />
      <About />
      <Experiences />
    </div>
  )
}

export default Home