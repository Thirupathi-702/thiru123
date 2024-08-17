import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function StockDetails({stockData}) {
  console.log(stockData[0]);
  
  return (
    <div>
      {stockData && (
        <>
          <h1>{stockData.name}</h1>
          {/* <TradingViewWidget symbol={symbol} /> */}
          <p>Current Price: {stockData.price}</p>
          <p>Volume: {stockData.volume}</p>
          {/* Add more stock details here */}
        </>
      )}
    </div>
  );
}

export default StockDetails;
