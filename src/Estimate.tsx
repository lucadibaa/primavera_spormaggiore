
const Estimate = () => {

    const inputStyle = "bg-white text-gray-600 focus:outline-none focus:border focus:border-[#40BF6C] w-fit text-sm h-7 px-2 border border-gray-300 rounded-lg"

    return (
        <div className="tracking-wide">
            {/* header */}
            <div className="flex flex-col mb-6">
                <span className="self-end">Spormaggiore <input autoComplete="off" className={inputStyle} placeholder="" type="date" /></span>
                <span>All'attenzione di <input autoComplete="off" className={inputStyle} placeholder="" type="text" /></span>
            </div>
            {/* body */}
            <div className="flex flex-col gap-y-2">
                <span>Buongiorno dal B&B Primavera di Spormaggiore. Eccole il preventivo per il periodo da lei richiesto:</span>
                <div className="space-x-2">
                    <span>Dal</span>
                    <input autoComplete="off" className={inputStyle} placeholder="" type="date" />
                    <span>al</span>
                    <input autoComplete="off" className={inputStyle} placeholder="" type="date" />
                    <span>per un totale di</span>
                    <input autoComplete="off" className={`${inputStyle} text-center !w-8`} placeholder="" type="text" />
                    <span>notti, per</span>
                    <input autoComplete="off" className={`${inputStyle} text-center !w-8`} placeholder="" type="text" />
                    <span>adulti e</span>
                    <input autoComplete="off" className={`${inputStyle} text-center !w-8`} placeholder="" type="text" />
                    <span>bambini.</span>
                </div>
                <div className="space-x-2">
                    <span>Il suo soggiorno ammonterà a</span>
                    <input autoComplete="off" className={`${inputStyle} text-center !w-12`} placeholder="" type="text" />
                    <span>€ che comprenderanno soggiorno e prima colazione, parcheggio, uso giardino e terrazzo privati e attrezzati.</span>
                </div>
                <div className="space-x-2">
                    <span><span className="font-semibold underline">Non</span> comprendono imposte di soggiorno di 1.50€ a notte per adulto dai 14anni.</span>
                    <span>Supplementi animali: i vostri amici pelosi sono i benvenuti, il loro soggiorno ammonta a 5.00€ a notte, per periodi superiori alle 3 notti il costo è di 15.00€ per l'intero soggiorno. Non andranno lasciati incustoditi.</span>
                </div>
                <div className="space-x-2">
                    <span>Il presente preventivo ha validità di 5 giorni.</span>
                    <span>Verrà richiesta caparra di</span>
                    <input autoComplete="off" className={`${inputStyle} text-center !w-12`} placeholder="" type="text" />
                    <span>€ (non rimborsabile)</span>
                </div>
                <span>Il saldo sarà richiesto al vostro arrivo in struttura, oppure con bonifico eseguito entro il giorno precedente al vostro arrivo.</span>
                <span>Un saluto e a presto!</span>
            </div>
            <div className="flex items-center justify-end">
                <span className="italic text-lg">Anna Lorandini</span>
            </div>
        </div>
    )
}

export default Estimate
