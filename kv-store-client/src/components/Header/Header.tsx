import React from 'react'

const Header = () => {
  return (
    <div className="container is-widescreen">
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h1 className="title is-1 header-text pt-6">
          Straightforward Key-Value Store
        </h1>
        <p className="subtitle is-5 is-spaced pt-3">
          Create an API Key and Start Adding your values
        </p>
        <h2 className="subtitle is-2 has-text-weight-bold has-text-primary">
          How to Get Started
        </h2>
      </div>
    </div>
  )
}

export default Header
