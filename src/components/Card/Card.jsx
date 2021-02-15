import './Card.css'
import React from 'react'

export default function Card({ question, answer, color, radius, showAnswer }) {
  return (
    <section
      style={{ backgroundColor: color, borderRadius: `${radius}px` }}
      className="Card"
    >
      <h2>{question}</h2>
      {showAnswer && <p>{answer}</p>}
    </section>
  )
}
