import * as React from 'react'
import { getRandomComponentId } from 'formiojs/utils/utils'
import MaterialComponent from './Component'
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText
} from '@material-ui/core'
import TextFieldComponent from 'formiojs/components/textfield/TextField.js'

const MaterialTextField = ({ instance }) => {
  const id = getRandomComponentId()
  return (
    <MaterialComponent instance={instance}>
      {(onChange, onBlur, value, validity) => {
        function handleChange(event) {
          const val = event.target.value
          onChange(val)
        }
        return (
          <FormControl
            required={instance.component.validate.required}
            disabled={instance.component.disabled}
            error={!validity.isValid}
          >
            {!instance.component.hideLabel && (
              <InputLabel htmlFor={id}>{instance.component.label}</InputLabel>
            )}
            <Input
              id={id}
              value={value}
              onChange={handleChange}
              onBlur={onBlur}
              aria-describedby={id + '-error'}
            ></Input>
            {!validity.isValid && (
              <FormHelperText id={id + '-error'}>
                {validity.message}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    </MaterialComponent>
  )
}

TextFieldComponent.MaterialComponent = MaterialTextField
export { TextFieldComponent }
