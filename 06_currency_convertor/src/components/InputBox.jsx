
function InputBox({
    label,
    amount,
    onamountchange,
    onCurrencyChange,
    amountdisable = false,
    selectcurrency ,
    currencyOption = [],
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor="amount-input" className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id="amount-input"
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => onamountchange(Number(e.target.value))}
                    disabled={amountdisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    value={selectcurrency}
                >
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
