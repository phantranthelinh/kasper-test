import React, { useEffect, useState } from 'react'

const History = () => {


  const [history, setHistory] = useState([])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedHistory = window?.localStorage?.getItem("calculatorHistory") ? JSON?.parse(localStorage.getItem("calculatorHistory")) : null;;
        setHistory(savedHistory ?? [])

      } catch (error) {
        console.log(error)
      }
    } else {
      // Handle the case where localStorage is not available
      console.warn("localStorage is not available in this environment.");
    }
  }, [])
  return (
    <div>

      <h1>History</h1>
      <ul>
        {history.length > 0 && history.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default History