import { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import Banner from './Banner';
import Estimate from './Estimate';
import SavedEstimate from './SavedEstimate';

interface EstimateTypes {
  date: string,
  guest: string,
  dateFom: string,
  dateTo: string,
  nights: string,
  adults: string,
  children: string,
  total: string,
  deposit: string,
}

function App() {

  const [saved, setSaved] = useState(false)
  const [values, setValues] = useState<EstimateTypes>({
    date: '',
    guest: '',
    dateFom: '',
    dateTo: '',
    nights: '',
    adults: '',
    children: '',
    total: '',
    deposit: '',
  })

  const { toPDF, targetRef } = usePDF({
    filename: `preventivo_${values?.guest.replace(/ /g, '_')}.pdf`,
    page: { margin: 1 }
  })

  const btnStyle = 'tracking-wide whitespace-nowrap disabled:opacity-40 w-fit text-white rounded-lg py-2 px-4 text-xs uppercase shadow-xl hover:opacity-80'

  return (
    <div className="w-full h-full flex justify-center items-center py-3 bg-[#cccccc] space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4 sm:mx-2">
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
            <button className={`${btnStyle} bg-white !text-gray-900`} onClick={() => {
              setSaved(false); setValues({
                date: '',
                guest: '',
                dateFom: '',
                dateTo: '',
                nights: '',
                adults: '',
                children: '',
                total: '',
                deposit: '',
              })
            }}>
              Reset
            </button>
        }
        <button disabled={!saved} className={`${btnStyle} bg-red-500`} onClick={() => toPDF()}>
          Scarica PDF
        </button>
      </div>
    </div>
  )
}

export default App
