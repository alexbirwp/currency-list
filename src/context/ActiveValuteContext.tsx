import React, { createContext, useCallback, useState } from "react";

type activeValuteType = string | null;

interface ActiveValuteIterface {
    activeValute: activeValuteType;
    changeActiveValue: (arg: activeValuteType) => void;
}

const initialState = {
    activeValute: null,
    changeActiveValue: (arg: activeValuteType) => {},
}

export const ActiveValuteContext = createContext<ActiveValuteIterface>(initialState);

const ActiveValuteProvider: React.FC = ({children}) => {
    const [activeValute, setActiveValute] = useState<activeValuteType>(null);
    const changeActiveValue = useCallback((newValute: activeValuteType) => {
        if (newValute !== activeValute) setActiveValute(newValute);
        else setActiveValute(null);
    }, [activeValute])

    const value = {
        activeValute,
        changeActiveValue
    };

    return (
        <ActiveValuteContext.Provider value={value}>
            {children}
        </ActiveValuteContext.Provider>
    );
}


export default ActiveValuteProvider;