import React, { useState } from 'react';
import axios from 'axios';

const LoanApplicationForm = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmission = (event) => {
    event.preventDefault();
    const userData = { name, surname, email, password };
    axios.post('http://localhost:3001/apply', userData)
     .then((response) => {
        console.log(response.data);
      })
     .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmission}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      

      <label>Surname:</label>
      <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
      

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      

      <button type="submit">Apply for Loan</button>
    </form>
  );
};

export default LoanApplicationForm;