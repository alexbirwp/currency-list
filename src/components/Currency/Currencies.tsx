import { useEffect, useState } from "react";
import { getCurrencyList } from "../../api/currenciesApi";
import Container from "../Layout/Container";
import CurrencyFilter from "./CurrencyFilter";
import CurrencyList from "./CurrencyList";
import { Valute } from "./CurrencyListElement";

const Currencies: React.FC = () => {

    const [valutes, setValutes] = useState<Valute[]>([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getCurrencyList(setValutes);
    }, []);

    const filterChangeHandler = (newFilter : string) => {
        setFilter(newFilter)
    }

    const filteredValutes = valutes.filter(valute => {
        const isNameContains = valute.Name.toLowerCase().includes(filter.toLowerCase());
        const isCharCodeContains = valute.CharCode.toLowerCase().includes(filter.toLowerCase())
        return isNameContains || isCharCodeContains;
    })

    return (
        <Container>
            <CurrencyFilter onFilterChange={filterChangeHandler}/>
            <CurrencyList valutes={filteredValutes}/>
        </Container>
    );
}

export default Currencies;