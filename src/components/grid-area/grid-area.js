import GridItem from '../grid-item/grid-item'
import './grid-area.css'

function GridArea({ size, turn, handleClick }) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const elements = []
  for (let i = 0; i < size; i += 1) {
    elements.push(<GridItem key={i} turn={turn} handleClick={handleClick} />)
  }
  return (
    <form className="grid-form" onSubmit={(event) => handleSubmit(event)}>
      {elements}
    </form>
  )
}

export default GridArea
