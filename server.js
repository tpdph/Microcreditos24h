const express = require('express');
const app = express();
const port = 3001;
const { User, LoanApplication, MicrocreditProvider, PaymentMethod } = require('./models');
const mongoose = require('./db'); // Assuming your MongoDB connection is in db.js

// Handle database connection errors
mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
  process.exit(1); // Exit the process with a non-zero status code
});

app.use(express.json());

// GET endpoint for microcredit providers
app.get('/microcredits', async (req, res) => {
  try {
    const microcreditProviders = await MicrocreditProvider.find(); // Retrieve all microcredit providers from the database
    res.send(microcreditProviders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error fetching microcredit providers' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error registering user' });
  }
});

app.post('/apply', async (req, res) => {
  try {
    const loanApplication = new LoanApplication(req.body);
    await loanApplication.save();
    res.send(loanApplication);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error applying for loan' });
  }
});

app.post('/verify-payment-method', async (req, res) => {
  try {
    const paymentMethod = new PaymentMethod(req.body);
    await paymentMethod.save();
    res.send(paymentMethod);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error verifying payment method' });
  }
});

// Initialize microcredit providers (optional, for demo purposes)
const initializeMicrocreditProviders = async () => {
  try {
    const microcreditProviders = [
      { name: 'Vivus', interestRate: 10, loanTerm: '24h' },
      { name: 'Moneyman', interestRate: 12, loanTerm: '24h' },
      { name: 'Mykredit', interestRate: 11, loanTerm: '24h' },
      { name: 'Cashper', interestRate: 13, loanTerm: '24h' },
      { name: 'Ibercrédito', interestRate: 10.5, loanTerm: '24h' },
    ];

    await MicrocreditProvider.insertMany(microcreditProviders);
    console.log('Microcredit providers initialized');
  } catch (err) {
    console.error('Error initializing microcredit providers:', err);
  }
};

// Call the initialization function (optional, for demo purposes)
initializeMicrocreditProviders();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});