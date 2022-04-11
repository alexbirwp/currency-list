import styles from './CurrencyFilter.module.css'

interface  CurrencyFilterProps {
    onFilterChange: (filter: string) => void
}


const CurrencyFilter: React.FC<CurrencyFilterProps> = ({onFilterChange}) => {
    const filterChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        onFilterChange(event.target.value);
    }
    return (
        <div className={styles['filter-wrapper']}>
            <input 
            placeholder='Название или Код валюты'
            onChange={filterChangeHandler}
            type="text" 
            />
        </div>
    );
}

export default CurrencyFilter;