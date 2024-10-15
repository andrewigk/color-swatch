import Form from './Form.jsx'
import ColorList from './ColorList.jsx'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'

const App = () => {
  const [values, setValues] = useState(new Values('#f15025').all(10))

  const generateColors = (color) => {
    if (color !== '' && color.length === 7) {
      try {
        const newValues = new Values(color).all(10)
        setValues(newValues)
      } catch (error) {
        toast.error('There was an error generating a color.')
      }
    } else {
      toast.error('Invalid color supplied by user. Doi!')
    }
  }

  return (
    <div>
      <Form generateColors={generateColors}></Form>
      <ColorList colors={values}></ColorList>
      <ToastContainer position="top-center" />
    </div>
  )
}
export default App
