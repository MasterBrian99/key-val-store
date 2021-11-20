import React from 'react'
import { apiUrl } from '../../util/data'

const SetValues = () => {
  return (
    <div className="container is-widescreen pt-5">
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h3 className="subtitle is-4 has-text-weight-bold has-text-black">
          2.API for Setting up a value
        </h3>
        <div className="notification is-primary api-key-show has-text-centered box">
          <strong>
            {apiUrl}
            {'set/{Api Key}/{Key}/{Value}'}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default SetValues
