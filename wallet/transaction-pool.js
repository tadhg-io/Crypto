const Transaction = require ('./transaction');

class TransactionPool {
    constructor() {
        // create the transactionMap object
        this.transactionMap = {}
    }

    setTransaction(transaction) {
        // set the key of this transaction's ID in the map to the transaction itself
        this.transactionMap[transaction.id] = transaction;
    }

    setMap(transactionMap) {
        this.transactionMap = transactionMap;
    }

    // gets an existing transaction from this Pool
    existingTransaction({ inputAddress }) {
        // get the input parameters
        const transactions = Object.values(this.transactionMap);
        // find the transaction
        return transactions.find(transaction => transaction.input.address === inputAddress);
    }

    validTransactions() {
        return Object.values(this.transactionMap).filter(
            transaction => Transaction.validTransaction(transaction)
        );
    }
}

module.exports = TransactionPool;