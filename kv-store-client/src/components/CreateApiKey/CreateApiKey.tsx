import React from 'react'

const CreateApiKey = () => {
  return (
    <div className="container is-widescreen pt-5">
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h3 className="subtitle is-4 has-text-weight-bold has-text-black">
          1. Create an API Key
        </h3>
        <button className="button is-info">Create One</button>
        <div className="notification is-success  box api-key-show mt-3 has-text-centered 	">
          <strong>{'{{Api Key}}'}</strong>
        </div>
        <div className="notification is-danger is-light api-key-show has-text-centered">
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        </div>
      </div>
    </div>
  )
}

export default CreateApiKey
