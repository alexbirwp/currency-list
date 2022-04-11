import { useContext, useEffect, useState } from 'react';
import { getCurrentCurrencyHistory } from '../../api/currenciesApi';
import { ActiveValuteContext } from '../../context/ActiveValuteContext';
import styles from './ActiveCurrency.module.css'
import ActiveCurrencyBody from './ActiveCurrencyBody';

interface CurrencyHistoryElement {
    date: string,
    value: number
}

export interface ActiveCurrencyType {
    name: string,
    history: CurrencyHistoryElement[]
}

const ActiveCurrency: React.FC = () => {
    const {activeValute, changeActiveValue} = useContext(ActiveValuteContext);
    const [currencyInfo, setCurrencyInfo] = useState<ActiveCurrencyType | null>(null);
    
    useEffect(() => {
        if (activeValute !== null) {
            getCurrentCurrencyHistory(activeValute, setCurrencyInfo);
        } else {
            setCurrencyInfo(null);
        }
    }, [activeValute]);


    let wrapperClassName = styles['active-currency-wrapper'];
    if (currencyInfo === null) wrapperClassName += ` ${styles.hidden}`;

    const currencyBody = currencyInfo !== null ? 
    <ActiveCurrencyBody currency={currencyInfo} />
    : 
    <></>

    return (
        <div className={wrapperClassName}>
            <button
            className={styles['close-button']}
            onClick={() => changeActiveValue(null)}
            ><span>X</span></button>
            <div>
                {currencyBody}
            </div>
        </div>
    )
}

export default ActiveCurrency;