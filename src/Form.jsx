import { useState } from 'react'

const Form = ({ generateColors }) => {
  const [color, setColor] = useState('')

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    generateColors(color)
  }
  return (
    <div className="container">
      <h4>Color Generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input type="color" value={color} onChange={handleChange}></input>

        <input type="text" value={color} onChange={handleChange}></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form
