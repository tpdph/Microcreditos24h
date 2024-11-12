import React, { useState } from 'react';

const RegistrationForm = ({ onSubmit }) => {
  const [user, setUser] = useState({});
  const [name, surname, email, password] = user;

  const handleSubmission = (event) => {
    event.preventDefault();
    const userData = { name, surname, email, password };
    onSubmit({...userData });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmission}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setUser({ name: e.target.value })} />
        

        <label>Surname:</label>
        <input type="text" value={surname} onChange={(e) => setUser({ surname: e.target.value })} />
        

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setUser({ email: e.target.value })} />
        

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setUser({ password: e.target.value })} />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
