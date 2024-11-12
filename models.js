// models.js
const mongoose = require('./db');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

const loanApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  returnDate: Date,
  microcreditProvider: String,
});

const microcreditProviderSchema = new mongoose.Schema({
  name: String,
  interestRate: Number,
  loanTerm: String,
});

const paymentMethodSchema = new mongoose.Schema({
  cardNumber: String,
  expDate: String,
  cvv: String,
  cardHolderName: String,
});

const User = mongoose.model('User', userSchema);
const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);
const MicrocreditProvider = mongoose.model('MicrocreditProvider', microcreditProviderSchema);
const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);

module.exports = { User, LoanApplication, MicrocreditProvider, PaymentMethod };