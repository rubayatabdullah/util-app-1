import { useState } from "react";

export default function Calculator(): JSX.Element {
  // Store results as strings so we keep trailing zeros
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);
  const [twoThrid, setTwoThird] = useState<string>("0.000");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (total: number): void => {
    const weGet = total - total / 3;
    setTwoThird(weGet.toFixed(3)); // keep trailing zeros
    const oneDiv = weGet / 7;
    let subTotal = weGet;
    const newResults: string[] = [];

    for (let i = 1; i <= 6; i++) {
      subTotal -= oneDiv;
      newResults.push(subTotal.toFixed(3)); // keep trailing zeros
    }

    setResult(newResults);
  };

  return (
    <div className="p-4 max-w-lg mt-2 mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(parseFloat(inputValue));
        }}
      >
        <label
          htmlFor="calculator-input"
          className="block text-sm font-medium text-gray-700"
        >
          Input:
        </label>
        <input
          id="calculator-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter value"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => {
          setInputValue("");
          setResult([]);
          setTwoThird("0.000");
        }}
        className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-indigo-600 shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Refresh
      </button>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mt-5 mb-5">
          Results
        </h3>
        <span className="leading-6 font-medium text-gray-400">
          After 2/3 : <span className="text-lg text-gray-900">{twoThrid}</span>
        </span>

        <table className="min-w-full divide-y divide-gray-200 mt-2 shadow-lg">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Step
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {result.map((sub, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-medium text-gray-900">
                  {sub}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
