import CurrencyListElement, { Valute } from "./CurrencyListElement";

interface CurrencyListProps {
    valutes: Valute[]
}

const CurrencyList: React.FC<CurrencyListProps> = ({valutes}) => {


    return (
        <ul>
            {valutes.map((valute : Valute) => 
                <CurrencyListElement key={valute.ID} valute={valute}/>
            )}
        </ul>
    );
}

export default CurrencyList;