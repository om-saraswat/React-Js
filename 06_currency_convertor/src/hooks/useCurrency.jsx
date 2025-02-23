import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // Fix: Call json() correctly
      .then((res) => setData(res[currency])) // Fix: Update state correctly
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);
  console.log(data)
  return data;
}

export default useCurrencyInfo;
