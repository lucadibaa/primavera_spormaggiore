import { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import Banner from './Banner';
import Estimate from './Estimate';
import SavedEstimate from './SavedEstimate';

function App() {

  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: 1 }
  })

  const [saved, setSaved] = useState(false)
  const [values, setValues] = useState({})

  const btnStyle = 'tracking-wide whitespace-nowrap disabled:opacity-40 w-fit text-white rounded-lg py-2 px-4 text-xs uppercase shadow-xl hover:opacity-80'

  return (
    <div className="flex justify-center items-center py-3 bg-[#cccccc] space-x-4">
      <div ref={targetRef} className="w-[21cm] h-[29.7cm] bg-white shadow-[0_0_0.5cm_rgba(0,0,0,0.5)] rounded-sm px-8 py-4 space-y-5">
        <Banner />
        <hr />
        {
          saved ?
            <SavedEstimate values={values} />
            :
            <Estimate setValues={setValues} />
        }
      </div>
      <div className="flex flex-col items-center gap-y-2">
        {
          !saved ?
            <button className={`${btnStyle} bg-green-500`} onClick={() => setSaved(true)}>
              Salva
            </button>
            :
            <button className={`${btnStyle} bg-white !text-gray-900`} onClick={() => { setSaved(false); setValues({}) }}>
              Reset
            </button>
        }
        <button disabled={!saved} className={`${btnStyle} bg-red-500`} onClick={toPDF}>
          Scarica PDF
        </button>
      </div>
    </div>
  )
}

export default App
