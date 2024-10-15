import { toast } from 'react-toastify'

const SingleColor = ({ color }) => {
  async function clipboard(text) {
    try {
      await navigator.clipboard.writeText(text)
      console.log(text)
      toast.success('Hex code copied to clipboard!')
    } catch (error) {
      console.log('Copy text failed')
    }
  }
  const handleClick = () => {
    clipboard(color.hex)
  }
  return (
    <div
      className="color color-light"
      style={{ backgroundColor: `#${color.hex}` }}
      onClick={handleClick}
    >
      <p className={color.type === 'shade' ? 'percent-value' : ''}>
        {color.weight}%
      </p>
      <p className={color.type === 'shade' ? 'color-value' : ''}>
        #{color.hex}
      </p>
    </div>
  )
}
export default SingleColor
