import React from 'react'

const ProblemCard = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">
            Difficulty: {props.difficulty}
          </p>

          <p className="card-text">
            Topic: {props.topic}
          </p>

          <button className="btn btn-primary">
            Solve Problem
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProblemCard