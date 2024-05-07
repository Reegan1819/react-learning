import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/about-react">About React</Link>
        <br />
        <Link to="/about-react-hooks">About React Hooks</Link>
        <br />
        <Link to="/about-react-router">About React Router</Link>
    </div>
  )
}

export default Home