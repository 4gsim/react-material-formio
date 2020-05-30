import * as React from 'react'
import { Input } from '@material-ui/core'
import TextAreaComponent from 'formiojs/components/textarea/TextArea.js'
import MaterialField from './Field'

const MaterialTextArea = ({ instance }) => {
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
            multiline={true}
            rows={instance.component.rows}
            rowsMax={instance.component.rows}
            value={value}
            onChange={handleChange}
            aria-describedby={`${id}-error`}
          ></Input>
        )
      }}
    </MaterialField>
  )
}

TextAreaComponent.prototype.removeBlanks = function (value) {
  return value
}

TextAreaComponent.MaterialComponent = MaterialTextArea
export { TextAreaComponent }
