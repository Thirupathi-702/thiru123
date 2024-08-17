import React, { useEffect, useState } from 'react';
import StockPlot from '../components/StockPlot';
import axios from 'axios';
import './HomePage.css';
import AddStock from '../components/AddStock'

function HomePage() {
  const [stockData, setStockData] = useState(null);
  const [title,setTitle]=useState("")
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [userId, setUserId] = useState('user123'); // Example user ID, replace with actual user ID from your auth context or state

  const stockNames = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB', 'NFLX', 'NVDA', 'BABA', 'INTC'];
  const fallbackData = {
    "Meta Data": { /* ... */ },
    "Time Series (5min)": { /* ... */ }
  };

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/stocks/${selectedStock}`);
        setStockData(response.data);
        setTitle(selectedStock  )
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setStockData(fallbackData);
        
      }
    };
    fetchStocks();
  }, [selectedStock]);

  
  const addTodo = async () => {
    const response = await fetch("http://localhost:5000/todo/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({ title})
    });
    const data = await response.json();
    
}

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Stock Market</h1>
      <div className="stock-select-container">
        <label htmlFor="stock-select" className="stock-select-label">Select a stock: </label>
        <select
          id="stock-select"
          className="stock-select"
          value={selectedStock}
          onChange={(e) => setSelectedStock(e.target.value)}
      
        >
          {stockNames.map((stock) => (
            <option key={stock} value={stock}>
              {stock}
            </option>
          ))}
        </select>
        <button onClick={() => addTodo(selectedStock)} className="add-to-watchlist-button">
          Add {selectedStock} to Watchlist
        </button>
      </div>
      {stockData ? <StockPlot stockData={stockData} /> : <div>Loading data...</div>}
      {/* <StockDetails stockData={stockData} /> */}
      <AddStock/>
    </div>
  );
}

export default HomePage;
