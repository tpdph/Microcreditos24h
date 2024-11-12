import React from 'react';
import axios from 'axios';

const MicrocreditComparisonTable = ({ microcreditProviders, onSelectProvider }) => {
  const handleSelection = (provider) => {
    onSelectProvider(provider);
    axios.post('http://localhost:3001/apply', {
      amount: 100,
      returnDate: '2024-03-01',
      microcreditProvider: provider.name,
    })
   .then((response) => {
      console.log(response.data);
    })
   .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h2>Microcredit Comparison Table</h2>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Interest Rate</th>
            <th>Loan Term</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {microcreditProviders.map((provider) => (
            <tr key={provider.name}>
              <td>{provider.name}</td>
              <td>{provider.interestRate}%</td>
              <td>{provider.loanTerm}</td>
              <td>
                <button onClick={() => handleSelection(provider)}>Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MicrocreditComparisonTable;
