import React, { useState } from 'react'

import { Form, FormDialog } from 'react-material-formio'
import { Button } from '@material-ui/core'
// import 'react-material-formio/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)

  function onChange(event) {
    console.log(event)
  }

  const form1 = {
    name: 'form1',
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
  const form2 = {
    name: 'form2',
    title: 'Form2',
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

  const onClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (value) => {
    setOpen(false)
    console.log(value)
  }

  return (
    <div>
      <Form form={form1} submission={submission} onChange={onChange} />
      <Button onClick={onClick}>Show dialog</Button>
      <FormDialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        form={form2}
        submission={submission}
      ></FormDialog>
    </div>
  )
}

export default App
