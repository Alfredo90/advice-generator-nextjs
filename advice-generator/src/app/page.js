"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };
    fetchData();
  }, []);

  console.log(quote);
  return (
    <div>
      <h1>{quote.author}</h1>
      <h2></h2>
    </div>
  );
}
