import React from 'react'
import ReactDOM from 'react-dom'
import { TextFieldComponent } from './TextField'

const components = {
  textfield: TextFieldComponent
}

export function getComponents() {
  for (const type of Object.keys(components)) {
    const CompClass = components[type]
    CompClass.prototype.render = function () {
      const viewContainer = this.parent
        ? this.parent.viewContainer()
        : this.viewContainer()
      if (!viewContainer) {
        return
      }
      this.materialComponent = React.createElement(
        CompClass.MaterialComponent,
        { instance: this }
      )
      ReactDOM.render(this.materialComponent, viewContainer)
    }

    const setValue = CompClass.prototype.setValue
    CompClass.prototype.setValue = function (...args) {
      const changed = setValue.call(this, ...args)
      if (this.materialComponent) {
        const viewContainer = this.parent
          ? this.parent.viewContainer()
          : this.viewContainer()
        if (!viewContainer) {
          return changed
        }
        ReactDOM.render(
          React.cloneElement(this.materialComponent, { instance: this }),
          viewContainer
        )
      }
      return changed
    }
  }
  return components
}
