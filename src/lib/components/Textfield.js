import * as React from 'react'
import { Input } from '@material-ui/core'
import TextFieldComponent from 'formiojs/components/textfield/TextField.js'
import MaterialField from './Field'

const MaterialTextField = ({ instance }) => {
  return (
    <MaterialField instance={instance}>
      {(id, value, onChange) => {
        function handleChange(event) {
          const val = event.target.value
          onChange(val)
        }
        return (
          <Input
            id={id}
            value={value}
            onChange={handleChange}
            aria-describedby={`${id}-error`}
          ></Input>
        )
      }}
    </MaterialField>
  )
}

TextFieldComponent.MaterialComponent = MaterialTextField
export { TextFieldComponent }
