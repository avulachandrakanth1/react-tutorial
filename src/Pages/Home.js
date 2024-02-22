import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <h1>Welcome to World of React.js</h1>
            </div>
            <div className="col-lg-4 m-1 col-md-6 col-sm-12 card">
                <h2>Introduction to React</h2>
                <p>
                React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by both Facebook and a community of individual developers and companies.
                </p>
            </div>
            <div className="col-lg-4 m-1 col-md-6 col-sm-12 card">
                <h2>Component-Based Architecture</h2>
                <p>
                React revolves around the concept of components, which are reusable building blocks for creating UI elements. Components can be nested within each other to create complex UI structures.                
                </p>
            </div>
            <div className="col-lg-3 m-1 col-md-6 col-sm-12 card">
                <h2>Virtual DOM</h2>
                <p>
                React uses a virtual DOM to efficiently update the actual DOM. When data changes, React compares the virtual DOM with the previous version, calculates the most efficient way to update the actual DOM, and applies the changes accordingly. This helps improve performance by minimizing unnecessary DOM manipulations.                
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home