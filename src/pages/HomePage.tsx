import BalanceCard from "../components/BalanceCard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Charts from "../components/Charts";
import '../App.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <BalanceCard />
      <TransactionForm />
      <TransactionList />
      <Charts />
    </div>
  )
}

export default HomePage;