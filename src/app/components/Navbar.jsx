import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div>
      <h1>
        <Link href="/About"> This is a Link Tag</Link>
      </h1>
    </div>
  )
}

export default Navbar
