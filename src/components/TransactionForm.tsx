import useStore from "../store/useStore";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import '../App.css';

const TransactionForm = () => {

  const addTransaction = useStore((state) => state.addTransaction);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('Salary');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return;
    }

    addTransaction({
      id: uuidv4(),
      type: type as "income" | "expense",
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
      comment,
    });

    setAmount("");
    setCategory("Salary");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="transactions-form">
      <h3 className="add-transaction">Add transaction</h3>
      <input 
      type="number" 
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select value={type} onChange={(e) => setCategory(e.target.value)}>
        <option value="Salary">Salary</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <input 
      type="text" 
      placeholder="Comment (optional)"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" >Add transaction</button>
    </form>
  );
}

export default TransactionForm;