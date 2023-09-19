import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
        <nav>
        <h1>Page Title</h1>
        <Link href="/">Home</Link>
        <Link href="about/">About</Link>
    </nav>
  )
}
