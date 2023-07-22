import React, { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");

  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To :{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>Alice</option>
          <option>Bob</option>
          <option>John</option>
        </select>
      </label>
      <section>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </section>
      <section>
        <button type="submit">Send</button>
      </section>
    </form>
  );
}
