import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.date.includes(searchTerm)
  );
  

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
