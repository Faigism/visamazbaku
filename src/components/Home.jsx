import Adventure from './Adventure'
import Popular from './Popular'
import Explore from './Explore'
import Hero from './Hero'
import PopularCountry from './PopularCountry'

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCountry />
      {/* <Popular /> */}
      {/* <Explore /> */}
      <Adventure />
    </>
  )
}
export default Home
