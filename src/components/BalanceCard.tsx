import useStore from "../store/useStore"
import '../App.css';

const BalanceCard = () => {

  const balance = useStore((state) => state.balance)

  return (
    <div className="balance-card">
      <h2>Current balance</h2>
      <h3 className="balance">{balance} $</h3>
    </div>
  )
}

export default BalanceCard