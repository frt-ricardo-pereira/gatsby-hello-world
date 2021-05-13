import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
    return (
      <div style={{ color: `purple` }}>
        <Link to="/about/">About</Link>
        <Header headerText="Hello Gatsby!" />
        <p class="mt-4 bg-red-300">W333333</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    )
  }