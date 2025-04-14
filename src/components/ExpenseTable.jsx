function ExpenseTable({ expenses }) {
    return (
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="border px-4 py-2">{expense.name}</td>
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">{expense.date}</td>
              <td className="border px-4 py-2">Ksh{expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  