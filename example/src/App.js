import React, { useState } from 'react'

import { Form } from 'react-material-formio'
import { Button } from '@material-ui/core'
import FormDialog from './FormDialog'
// import 'react-material-formio/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)

  function onChange(event) {
    if (event.changed) {
      console.log(event)
    }
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
      },
      {
        type: 'textarea',
        label: 'Comment',
        key: 'comment',
        hideLabel: false,
        disabled: false
      },
      {
        label: 'Gender',
        widget: 'choicesjs',
        tableView: true,
        data: {
          values: [
            {
              label: 'M',
              value: 'm'
            },
            {
              label: 'F',
              value: 'f'
            }
          ]
        },
        template: '{{item.label}}',
        selectThreshold: 0.3,
        key: 'gender',
        type: 'select',
        indexeddb: {
          filter: {}
        },
        input: true
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
        validate: {
          required: true
        },
        hideLabel: false,
        disabled: false
      },
      {
        type: 'textarea',
        label: 'Comment',
        key: 'comment',
        hideLabel: false,
        disabled: false
      },
      {
        label: 'Gender',
        widget: 'choicesjs',
        tableView: true,
        validate: {
          required: true
        },
        data: {
          values: [
            {
              label: 'M',
              value: 'm'
            },
            {
              label: 'F',
              value: 'f'
            }
          ]
        },
        template: '{{item.label}}',
        selectThreshold: 0.3,
        key: 'gender',
        type: 'select',
        indexeddb: {
          filter: {}
        },
        input: true
      }
    ]
  }
  const submission = {
    data: {
      firstName: 'John Doe',
      comment: 'test'
    }
  }

  const onClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    console.log(submission)
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
