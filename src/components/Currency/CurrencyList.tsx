import CurrencyListElement, { Valute } from "./CurrencyListElement";
import styles from './CurrencyList.module.css'

interface CurrencyListProps {
    valutes: Valute[]
}

const CurrencyList: React.FC<CurrencyListProps> = ({valutes}) => {


    return (
        <ul className={styles["currency-list"]}>
            {valutes.map((valute : Valute) => 
                <CurrencyListElement key={valute.ID} valute={valute}/>
            )}
        </ul>
    );
}

export default CurrencyList;