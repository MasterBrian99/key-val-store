import axios from 'axios'
import React, { useState } from 'react'
import { apiUrl } from '../../util/data'

const CreateApiKey = () => {
  const [apiKey, setApiKey] = useState('')
  const [showWarn, setShowWarn] = useState(false)
  const createKey = async () => {
    axios
      .post(apiUrl + 'create')
      .then((res) => {
        console.log(res.data.apiKey)
        setApiKey(res.data.apiKey)
        setShowWarn(true)
      })
      .catch((err) => {
        setApiKey('Something Went Wrong !')
      })
  }

  return (
    <div className="container is-widescreen pt-5">
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h3 className="subtitle is-4 has-text-weight-bold has-text-black">
          1. Create an API Key
        </h3>
        <button className="button is-info" onClick={createKey}>
          Create One
        </button>
        <div
          className="notification is-success  box api-key-show mt-3 has-text-centered is-clickable	"
          onClick={() => {
            navigator.clipboard.writeText(apiKey)
          }}
        >
          <strong>{apiKey == '' ? '{{Api Key}}' : apiKey}</strong>
        </div>
        {showWarn ? (
          <div className="notification is-danger is-light api-key-show has-text-centered scale-in-center ">
            don't lose your API keys,without the key,you can't get your data
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default CreateApiKey
