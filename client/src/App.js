import { useState } from "react";
import "./App.css";
function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: null,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  }
  function handleInput(e) {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleInput}
        placeholder="Enter transaction amount"
      ></input>
      <input
        type="text"
        name="description"
        value={form.description}
        placeholder="Enter transaction details"
      />
      <input type="date" name="date" value={form.date} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
