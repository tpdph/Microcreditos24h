import React, { useState } from 'react';

const PaymentMethodForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleSubmission = (event) => {
    event.preventDefault();
    const paymentMethod = {
      cardNumber,
      expDate,
      cvv,
      cardHolderName,
    };
    onSubmit(paymentMethod);
  };

  return (
    <div>
      <h2>Payment Method Verification</h2>
      <form onSubmit={handleSubmission}>
        <label>Card Number:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        

        <label>Expiration Date (MM/YYYY):</label>
        <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} />
        

        <label>CVV:</label>
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        

        <label>Card Holder Name:</label>
        <input type="text" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} />
        

        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default PaymentMethodForm;

