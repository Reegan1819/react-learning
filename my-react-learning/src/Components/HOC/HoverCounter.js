import React from 'react'
import WithCounter from './WithCounter'

const HoverCounter = (props) => {
    const { count, incrementCount } = props
  return (
    <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  )
}

export default HoverCounter