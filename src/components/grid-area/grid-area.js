import GridItem from '../grid-item/grid-item'
import './grid-area.css'

function GridArea({ size }) {
  const elements = []
  for (let i = 0; i < size; i += 1) {
    elements.push(<GridItem key={i} />)
  }
  return <form className="grid-form">{elements}</form>
}

export default GridArea
