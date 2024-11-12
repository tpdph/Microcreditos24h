import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './components/RegistrationForm';
import LoanApplicationForm from './components/LoanApplicationForm';
import MicrocreditComparisonTable from './components/MicrocreditComparisonTable';
import PaymentMethodForm from './components/PaymentMethodForm';
import ApplicationStatusDashboard from './components/ApplicationStatusDashboard';

function App() {
  const [user, setUser] = useState({});
  const [loanApplication, setLoanApplication] = useState({});
  const [microcreditProviders, setMicrocreditProviders] = useState([]);
  const [paymentMethodVerified, setPaymentMethodVerified] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/microcredits')
     .then(response => {
        setMicrocreditProviders(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  }, []);

  const handleRegistration = (userData) => {
    axios.post('http://localhost:3001/register', userData)
     .then(response => {
        setUser(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  };

  const handleLoanApplication = (loanData) => {
    axios.post('http://localhost:3001/apply', {...loanData, userId: user.id})
     .then(response => {
        setLoanApplication(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  };

  const handlePaymentMethodVerification = (paymentMethod) => {
    axios.post('http://localhost:3001/verify-payment-method', paymentMethod)
     .then(response => {
        setPaymentMethodVerified(true);
      })
     .catch(error => {
        console.log(error);
      });
  };

  const handleApplicationStatusUpdate = () => {
    axios.get(`http://localhost:3001/applications/${loanApplication.id}`)
     .then(response => {
        setApplicationStatus(response.data.status);
      })
     .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>microcreditos24h</h1>
      <RegistrationForm onSubmit={handleRegistration} />
      {user.id && (
        <div>
          <LoanApplicationForm microcreditProviders={microcreditProviders} onSubmit={handleLoanApplication} />
          {loanApplication.id && (
            <div>
              <PaymentMethodForm onSubmit={handlePaymentMethodVerification} />
              {paymentMethodVerified && (
                <div>
                  <MicrocreditComparisonTable microcreditProviders={microcreditProviders} selectedProvider={loanApplication.microcreditProvider} />
                  <ApplicationStatusDashboard status={applicationStatus} onUpdate={handleApplicationStatusUpdate} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
