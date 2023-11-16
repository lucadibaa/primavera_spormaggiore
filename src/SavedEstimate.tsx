
const SavedEstimate = ({ values }: any) => {

    const toEuropean = (date: string) => {
        return date.replace(/-/g, ' / ').split(' ').reverse().join('')
    }

    return (
        <div className="tracking-wide text-gray-900">
            {/* header */}
            <div className="flex flex-col mb-6">
                <span className="self-end">Spormaggiore <span className="text-[17px] font-medium">{values.date ? toEuropean(values.date) : ''}</span></span>
                <span>All'attenzione di <span className="text-[17px] font-medium">{values.guest || ''}</span></span>
            </div>
            {/* body */}
            <div className="flex flex-col gap-y-2">
                <span>Buongiorno dal B&B Primavera di Spormaggiore. Eccole il preventivo per il periodo da lei richiesto:</span>
                <div>
                    <span>Dal&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.dateFrom ? toEuropean(values.dateFrom) : ''}&nbsp;</span>
                    <span>al&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.dateTo ? toEuropean(values.dateTo) : ''}&nbsp;</span>
                    <span>per un totale di&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.nights || ''}&nbsp;</span>
                    <span>notti, per&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.adults || ''}&nbsp;</span>
                    <span>adulti e&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.children || ''}&nbsp;</span>
                    <span>bambini.</span>
                </div>
                <div className="">
                    <span>Il suo soggiorno ammonterà a&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.total || ''}€&nbsp;</span>
                    <span>che comprenderanno soggiorno e prima colazione, parcheggio, uso giardino e terrazzo privati e attrezzati.</span>
                </div>
                <div className="">
                    <span><span className="font-semibold underline">Non</span> comprendono imposte di soggiorno di 1.50€ a notte per adulto dai 14anni.</span>
                    <span>Supplementi animali: i vostri amici pelosi sono i benvenuti, il loro soggiorno ammonta a 5.00€ a notte, per periodi superiori alle 3 notti il costo è di 15.00€ per l'intero soggiorno. Non andranno lasciati incustoditi.</span>
                </div>
                <div className="">
                    <span>Il presente preventivo ha validità di 5 giorni.</span>
                    <span>Verrà richiesta caparra di&nbsp;</span>
                    <span className="text-[17px] font-medium">{values.deposit || ''}€&nbsp;</span>
                    <span>(non rimborsabile)</span>
                </div>
                <span>Il saldo sarà richiesto al vostro arrivo in struttura, oppure con bonifico eseguito entro il giorno precedente al vostro arrivo.</span>
                <span>Un saluto e a presto!</span>
            </div>
            <div className="flex items-center justify-end">
                <span className="italic text-lg">Anna Lorandini</span>
            </div>
        </div>)
}

export default SavedEstimate
