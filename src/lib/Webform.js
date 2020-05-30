import Webform from 'formiojs/Webform.js'
Webform.prototype.redraw = function () {
  return this.render()
}
Webform.prototype.clear = function () {
  if (this.viewContainer) {
    this.viewContainer.setState((state) => ({
      ...state,
      children: []
    }))
  }
}
Webform.prototype.render = function () {
  if (this.viewContainer) {
    this.clear()
    this.renderComponents()
    // this.setValue(this._submission)
  }
}
