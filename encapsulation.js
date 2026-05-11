class BankAccount {
  #balance = 0;

  constructor(initializeBalance) {
    this.#balance = initializeBalance;
    Object.freeze(this);
  }

  get showBalance() {
    return this.#balance;
  }

  set updateBalance(newBalance) {
    return (this.#balance = newBalance);
  }
}

const accountUser01 = new BankAccount(50000);
accountUser01.balance = -1000; // Tidak berlaku karena efek dari Object.freeze();
console.log(accountUser01);
console.log(accountUser01.showBalance);
accountUser01.updateBalance = 100000;
console.log(accountUser01.showBalance);
