export interface Valute {
    ID: string,
    NumCode: string,
    CharCode: string,
    Nominal: number,
    Name: string,
    Value: number,
    Previous: number
}
interface CurrencyListElementProps {
    valute: Valute
}

function CurrencyListElement ({ valute }: CurrencyListElementProps) {
    const className = valute.Value >= valute.Previous ? 'up' : 'down';
    return (
        <li className={className}>
            <div className="name">
                <div>{valute.CharCode}</div>
                <div>{valute.Name}</div>
            </div>
            <div className="value">
                {valute.Value}
            </div>
        </li>
    )
}

export default CurrencyListElement;