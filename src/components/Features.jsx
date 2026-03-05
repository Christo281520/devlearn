import React from 'react'
import { FaCode, FaChartLine,FaTrophy,FaBook } from 'react-icons/fa'
import "./css/features.css"
const Features = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Platform Features</h2>
      <div className="row text-center">
        <div className="col-md-3">
          <div className="card feature-card shadow p-3">
            <FaCode size={40} className="mb-3 text-primary"/>
            <h5>Coding Challenges</h5>
            <p>Practice coding problems and improve problem-solving skills.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card feature-card shadow p-3">
            <FaChartLine size={40} className="mb-3 text-success"/>
            <h5>Skill Analytics</h5>
            <p>Track your performance and coding progress.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card feature-card shadow p-3">
            <FaTrophy size={40} className="mb-3 text-warning"/>
            <h5>Leaderboard</h5>
            <p>Compare your ranking with other developers.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card feature-card shadow p-3">
            <FaBook size={40} className="mb-3 text-danger"/>
            <h5>Learning</h5>
            <p>Learn programming languages like Python and JavaScript.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features