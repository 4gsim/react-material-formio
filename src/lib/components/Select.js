import * as React from 'react'
import SelectComponent from 'formiojs/components/select/Select.js'
import MaterialField from './Field'
import { Select, MenuItem } from '@material-ui/core'

const MaterialSelect = ({ instance }) => {
  const [options, setOptions] = React.useState([])

  React.useEffect(() => {
    instance.setMaterialOptions = setOptions
    instance.triggerUpdate()
  }, [])

  return (
    <MaterialField instance={instance}>
      {(id, value, onChange) => {
        function handleChange(event) {
          const val = event.target.value
          onChange(val)
        }
        return (
          <Select id={id} value={value} onChange={handleChange}>
            {options.map((option, index) => (
              // TODO templating
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )
      }}
    </MaterialField>
  )
}

// Make sure we detect changes when new items make their way into the select dropdown.
const setItems = SelectComponent.prototype.setItems
SelectComponent.prototype.setItems = function (...args) {
  setItems.call(this, ...args)
  if (this.setMaterialOptions) {
    this.setMaterialOptions(this.selectOptions)
  }
}

SelectComponent.MaterialComponent = MaterialSelect
export { SelectComponent }
