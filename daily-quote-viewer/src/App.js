import React, { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>Daily Quote Viewer</h1>
      <QuoteBox quote={quote} author={author} loading={loading} />
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Loading..." : "Get New Quote"}
      </button>
    </div>
  );
}

export default App;
