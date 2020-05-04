import ReactDOM from 'react-dom'
import Webform from 'formiojs/Webform.js'
Webform.prototype.redraw = function () {
  return this.render()
}
Webform.prototype.clear = function () {
  const viewContainer = this.viewContainer ? this.viewContainer() : null
  if (viewContainer) {
    ReactDOM.unmountComponentAtNode(viewContainer)
  }
}
Webform.prototype.render = function () {
  if (this.viewContainer && this.viewContainer()) {
    this.clear()
    this.renderComponents()
    // this.setValue(this._submission)
  }
}
