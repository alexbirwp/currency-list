import styles from './CurrencyFilter.module.css'

interface  CurrencyFilterProps {
    onFilterChange: (filter: string) => void;
    onSortChange: (sort: string) => void;
}


const CurrencyFilter: React.FC<CurrencyFilterProps> = ({onFilterChange, onSortChange}) => {
    const filterChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onFilterChange(event.target.value);
    }

    const sortChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        onSortChange(event.target.value)
    }
    
    return (
        <div className={styles['filter-wrapper']}>
            <input 
            placeholder='Название или Код валюты'
            onChange={filterChangeHandler}
            type="text" 
            />
            <select onChange={sortChangeHandler}>
                <option value="">Сортировка</option>
                <option value="-1">Рост(Убывание)</option>
                <option value="1">Сортировка(Возрастание)</option>
            </select>
        </div>
    );
}

export default CurrencyFilter;