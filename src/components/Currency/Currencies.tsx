import { useEffect, useState } from "react";
import { getCurrencyList } from "../../api/currenciesApi";
import Container from "../Layout/Container";
import CurrencyFilter from "./CurrencyFilter";
import CurrencyList from "./CurrencyList";
import { Valute } from "./CurrencyListElement";

const Currencies: React.FC = () => {

    const [valutes, setValutes] = useState<Valute[]>([]);

    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        getCurrencyList(setValutes);
    }, []);

    const filterChangeHandler = (newFilter : string) => {
        setFilter(newFilter)
    }
    const sortChangeHandler = (newSort: string) => {
        setSort(newSort);
    }

    let sortedValutes = valutes;

    if(sortedValutes.length && sort !== '') {
        const numberSort = Number(sort);
        sortedValutes = valutes.sort((valute1, valute2) => {
            const delta1 = valute1.Value - valute1.Previous;
            const delta2 = valute2.Value - valute2.Previous;
            return (delta1 - delta2) * numberSort;
        });
    }
    


    const filteredValutes = sortedValutes.filter(valute => {
        const isNameContains = valute.Name.toLowerCase().includes(filter.toLowerCase());
        const isCharCodeContains = valute.CharCode.toLowerCase().includes(filter.toLowerCase())
        return isNameContains || isCharCodeContains;
    });

    return (
        <Container>
            <CurrencyFilter 
            onSortChange={sortChangeHandler}
            onFilterChange={filterChangeHandler}/>
            <CurrencyList valutes={filteredValutes}/>
        </Container>
    );
}

export default Currencies;