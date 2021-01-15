import React from "react"
import {Link} from "gatsby"
import Layout from '../components/layout'

export default function Home() {
  return <div style={{ color: `purple`}}>
    <Layout>
    <p>Now: Hello World :)</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" /><br />
    <button class="primary-button">Click me</button><br />
    <Link to='/about'>About me</Link>
    </Layout>
    </div>
}
