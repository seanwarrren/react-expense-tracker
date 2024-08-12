import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {currentTransactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastTransaction >= transactions.length}
        >
          Next
        </button>
      </div>
    </>
  );
};



