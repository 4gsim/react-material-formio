import React from 'react'

import { Form } from 'react-material-formio'
// import 'react-material-formio/dist/index.css'

const App = () => {
  function onChange(event) {
    console.log(event)
  }

  const form = {
    components: [
      {
        type: 'textfield',
        label: 'First Name',
        key: 'firstName',
        hideLabel: false,
        disabled: false,
        validate: {
          required: true
        }
      }
    ]
  }
  const submission = {
    data: {
      firstName: 'John Doe'
    }
  }
  return <Form form={form} submission={submission} onChange={onChange} />
}

export default App
