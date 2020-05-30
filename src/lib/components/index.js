import React from 'react'
import { TextFieldComponent } from './TextField'
import { TextAreaComponent } from './Textarea'
import { SelectComponent } from './Select'

const components = {
  select: SelectComponent,
  textarea: TextAreaComponent,
  textfield: TextFieldComponent
}

export function getComponents() {
  for (const type of Object.keys(components)) {
    const CompClass = components[type]
    CompClass.prototype.render = function () {
      const viewContainer = this.parent
        ? this.parent.viewContainer
        : this.viewContainer
      if (!viewContainer) {
        return
      }
      const key = `${this.id}-mat`
      const materialComponent = React.createElement(
        CompClass.MaterialComponent,
        { key: key, instance: this }
      )

      viewContainer.setState((state) => ({
        ...state,
        children: state.children.concat([materialComponent])
      }))
    }

    const setValue = CompClass.prototype.setValue
    CompClass.prototype.setValue = function (...args) {
      const changed = setValue.call(this, ...args)
      if (this.setMaterialValue) {
        this.setMaterialValue(this.dataValue)
      }
      return changed
    }

    const setCustomValidity = CompClass.prototype.setCustomValidity
    CompClass.prototype.setCustomValidity = function (
      messages,
      dirty,
      external
    ) {
      setCustomValidity.call(this, messages, dirty, external)
console.log(messages)
      if (typeof messages === 'string' && messages) {
        return this.setMaterialValidity({
          isValid: false,
          message: messages
        })
      }

      if (Array.isArray(messages) && messages.length) {
        return this.setMaterialValidity({
          isValid: false,
          message: messages[0].message
        })
      }

      return this.setMaterialValidity({
        isValid: true,
        message: null
      })
    }
  }
  return components
}
