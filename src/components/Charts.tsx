import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import useStore from "../store/useStore";
import { useMemo } from "react";
import '../App.css';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = () => {

  const transactions = useStore((state) => state.transactions)

  const data = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);

    return {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: '$ Amount',
          data: [income, expense],
          backgroundColor: ["#4CAF50", "#F44336"],
        }
      ]
    }

  }, [transactions])
  
  return (
    <div className="charts-container">
      <h3 className="financal-overview">Financal overview</h3>
      <Bar data={data}/>
    </div>
  )
}

export default Charts