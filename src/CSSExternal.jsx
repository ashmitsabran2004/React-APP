import React from 'react'
import './CSSExternal.css'

export default function CSSExternal() {
  const items = ['Java Script', 'React', 'Vite']
  const flavors = ['Chocolate', 'Vanilla', 'Strawberry']

  return (
    <div className="external-container">
      <h2>Hello Vite + React!</h2>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
      <ol>
        {flavors.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ol>
      <div className="external-note">This component is styled with an external CSS file.</div>
    </div>
  )
}
