import React from "react";

function QuoteBox({ quote, author, loading }) {
  return (
    <div className="quote-box">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <p className="quote">"{quote}"</p>
          <p className="author">— {author}</p>
        </>
      )}
    </div>
  );
}

export default QuoteBox;
