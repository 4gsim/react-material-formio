import * as React from 'react'
import MaterialComponent from './Component'
import { FormControl, InputLabel, FormHelperText } from '@material-ui/core'

const MaterialField = ({ instance, children }) => {
  const [validity, setValidity] = React.useState({
    isValid: true
  })

  function checkValidity() {
    instance
      .checkComponentValidity(instance.dataValue, true, null, true)
  }

  React.useEffect(() => {
    checkValidity()
    instance.setMaterialValidity = setValidity
  }, [])

  return (
    <MaterialComponent instance={instance}>
      {(value, onChange) => {
        const id = `${instance.id}-mat-field`
        return (
          <FormControl
            style={{ width: '100%' }}
            required={instance.component.validate.required}
            disabled={instance.component.disabled}
            error={!validity.isValid}
          >
            {!instance.component.hideLabel && (
              <InputLabel htmlFor={id}>{instance.component.label}</InputLabel>
            )}

            {children(id, value, (val) => {
              onChange(val)
              checkValidity()
            })}

            {!validity.isValid && (
              <FormHelperText id={`${id}-error`}>
                {validity.message}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    </MaterialComponent>
  )
}

export default MaterialField
