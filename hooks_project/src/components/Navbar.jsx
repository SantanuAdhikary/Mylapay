import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

        <Link to="/">useRef</Link>
        <Link to="/usereducer">useReducer</Link>

    </nav>
  )
}

export default Navbar