import React from 'react'
import { apiUrl } from '../../util/data'

const GetValues = () => {
  return (
    <div className="container is-widescreen pt-5">
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h3 className="subtitle is-4 has-text-weight-bold has-text-black">
          3. API for Get a value
        </h3>
        <div className="notification is-warning api-key-show box  has-text-centered ">
          <strong>
            
            
            
            {apiUrl}    
            {'get/{Api Key}/{Key}'}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default GetValues
