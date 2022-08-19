import Balance from './balance/Balance'
import Stats from './stats/Stats'

const Home = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#F8E9DD] w-full">
     <Balance />
     <Stats />
    </div>
  )
}

export default Home