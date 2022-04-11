import { ActiveCurrencyType } from "./ActiveCurrency";
import styles from "./ActiveCurrencyBody.module.css";

interface ActiveCurrencyBodyProps {
    currency: ActiveCurrencyType
}

const ActiveCurrencyBody: React.FC<ActiveCurrencyBodyProps> = ({currency}) => {
    return  (
        <>
        <h2>{currency.name}</h2>
        <ul className={styles["currency-list"]}>
            {currency.history.map(({date, value}) => (
                <li key={date}>
                    <div className="date">
                        Дата: {date}
                    </div>
                    <div className="value">
                        {value}
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ActiveCurrencyBody;