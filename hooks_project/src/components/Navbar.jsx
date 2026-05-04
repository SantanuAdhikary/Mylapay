import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

        <Link to="/">useRef</Link>
        <Link to="/usereducer">useReducer</Link>
        <Link to="/stu">student form</Link>

    </nav>
  )
}

export default Navbar