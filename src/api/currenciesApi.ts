import { Valute } from "../components/Currency/CurrencyListElement"

const fetchUrl = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

type getCurrenciesCallback = (valutes: Valute[]) => void;
export const getCurrencyList = (callback: getCurrenciesCallback) => {
    fetchUrl('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(data => {
        callback(Object.values(data.Valute))
    })
}

type getCurrentCurrencyCallback = (valute: Valute) => void;
export const getCurrentCurrency = (
    valuteCode: string, callback: getCurrentCurrencyCallback
) => {
    fetchUrl('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(data => {
        callback(data.Valute[valuteCode])
    })
}

export const getCurrentCurrencyHistory = async (
    valuteCode: string, callback:  Function
) => {
    const firstData = await fetchUrl('https://www.cbr-xml-daily.ru/daily_json.js');
    const history = [];
    history.push({
        date: firstData.Date,
        value: firstData.Valute[valuteCode].Value
    });
    let day = 9;
    let prevUrl = firstData.PreviousURL.trim('//');
    while(day > 1) {
        const data = await fetchUrl(prevUrl);
        history.push({
            date: data.Date,
            value: data.Valute[valuteCode].Value
        });
        prevUrl = data.PreviousURL;
        day--;
    }
    callback({
        history,
        name: firstData.Valute[valuteCode].Name
    })
}
