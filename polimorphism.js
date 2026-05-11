class PaymentMethod {
  amount = 0;

  feeCharge(totalToPay) {}
}

class PaymentDebit extends PaymentMethod {
  constructor() {
    super(amount);
  }
  feeCharge(totalToPay) {
    this.amount = totalToPay + totalToPay * 0.01;
  }
}

class PaymentCreditCard extends PaymentMethod {
  constructor() {
    super(amount);
  }
  feeCharge(totalToPay) {
    this.amount = totalToPay + totalToPay * 0.02;
  }
}

const payment = new PaymentDebit();
payment.feeCharge(100000);
console.log(payment.amount);
