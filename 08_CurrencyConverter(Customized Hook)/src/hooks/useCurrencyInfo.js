import { useEffect } from "react";
import { useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json()).then((data) => setData(data)).catch((err) => {
            console.log(err);
        })
        console.log(data);
    }, [currency])

    return data;
}

export default useCurrencyInfo;