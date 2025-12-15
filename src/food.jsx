import React from 'react'
import './food.css'

export default function Food() {
  return (
    <div className="food-container">
      <h2 className="food-title">My Favorite Foods</h2>
      <div className="food-boxes">
        <div className="food-box beige-box">
          <h3>Pizza</h3>
          <p>Italian</p>
        </div>
        <div className="food-box teal-box">
          <h3>Noodles</h3>
          <p>Chinese</p>
        </div>
        <div className="food-box yellow-box">
          <h3>Pav Bhaji</h3>
          <p>Indian</p>
        </div>
      </div>
    </div>
  )
}
