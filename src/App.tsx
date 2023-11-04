import Banner from './Banner'
import Estimate from './Estimate'

function App() {
  return (
    <div className="flex justify-center items-center py-3 bg-[#cccccc]">
      <div className="w-[21cm] h-[29.7cm] bg-white shadow-[0_0_0.5cm_rgba(0,0,0,0.5)] rounded-sm px-8 py-4 space-y-5">
        <Banner />
        <hr />
        <Estimate />
      </div>
    </div>
  )
}

export default App
