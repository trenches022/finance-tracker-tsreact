import useStore from "../store/useStore"
import '../App.css';

const TransactionList: React.FC = () => {

  const { transactions, deleteTransaction } = useStore();

  return (
    <div className="transactions-list">
      <h2 className="transaction-history">Transaction history</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.type}>
            <span>{transaction.category}</span>
            <span>${transaction.amount.toFixed(2)}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList