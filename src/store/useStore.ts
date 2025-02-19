import { create } from "zustand";

interface Transaction {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
  comment?: string;
}

interface StoreState {
  transactions: Transaction[];
  balance: number;
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
}

const useStore = create<StoreState>((set) => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions") || "[]") as Transaction[];
  const initialBalance = savedTransactions.reduce(
    (acc, t) => acc + (t.type === "income" ? t.amount : -t.amount),
    0
  );

  return {
    transactions: savedTransactions,
    balance: initialBalance,

    addTransaction: (transaction) =>
      set((state) => {
        const updatedTransactions = [...state.transactions, transaction];
        const updatedBalance =
          transaction.type === "income"
            ? state.balance + transaction.amount
            : state.balance - transaction.amount;

        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

        return { transactions: updatedTransactions, balance: updatedBalance };
      }),

    deleteTransaction: (id) =>
      set((state) => {
        const updatedTransactions = state.transactions.filter((t) => t.id !== id);
        const updatedBalance = updatedTransactions.reduce(
          (acc, t) => acc + (t.type === "income" ? t.amount : -t.amount),
          0
        );

        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

        return { transactions: updatedTransactions, balance: updatedBalance };
      }),
  };
});

export default useStore;
