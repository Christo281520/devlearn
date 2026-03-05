import React from 'react'

const Features = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Platform Features</h2>

      <div className="row">

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5>Coding Challenges</h5>
              <p>Practice coding problems and improve problem-solving skills.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5>Skill Analytics</h5>
              <p>Track your performance and coding progress.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5>Leaderboard</h5>
              <p>Compare your ranking with other developers.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5>Learning</h5>
              <p>Learn programming languages like Python, JavaScript and more.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features