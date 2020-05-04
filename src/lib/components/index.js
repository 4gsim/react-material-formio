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
      if (this.materialComponent) {
        return
      }
      const viewContainer = this.parent
        ? this.parent.viewContainer()
        : this.viewContainer()
      if (!viewContainer) {
        return
      }

      this.materialComponent = React.createElement(
        CompClass.MaterialComponent,
        { instance: this },
        null
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
          return
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
