interface  CurrencyFilterProps {
    onFilterChange: (filter: string) => void
}


const CurrencyFilter: React.FC<CurrencyFilterProps> = ({onFilterChange}) => {
    const filterChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        onFilterChange(event.target.value);
    }
    return (
        <input 
        onChange={filterChangeHandler}
        type="text" 
        />
    );
}

export default CurrencyFilter;