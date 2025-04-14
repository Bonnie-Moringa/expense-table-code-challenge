import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: crypto.randomUUID(),
      name,
      description,
      amount: parseFloat(amount),
      category,
      date
    };
    onAddExpense(newExpense);
    setName('');
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Expense Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
