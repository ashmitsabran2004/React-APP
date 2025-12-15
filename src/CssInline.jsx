const myStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
  border: '2px solid black',
  borderRadius: '5px',
}

function CssInline() {
  return (
    <div style={myStyle}>
      <h1>This is my Inline CSS example.</h1>
    </div>
  )
}

export default CssInline
