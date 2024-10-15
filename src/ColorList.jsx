import { nanoid } from 'nanoid'
import SingleColor from './SingleColor.jsx'

const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color) => {
        const id = nanoid()
        return <SingleColor key={id} color={color}></SingleColor>
      })}
    </div>
  )
}
export default ColorList
