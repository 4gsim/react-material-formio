import FormioForm from 'formiojs/Form'
import React, { createRef, PureComponent } from 'react'

class FormComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.element = createRef()
  }

  componentDidMount() {
    let renderer = new FormioForm()
    renderer.instance = renderer.create('form')
    renderer.instance.viewContainer = () => this.element.current
    renderer.instance
      .setForm(this.props.form)
      .then(() => {
        renderer.readyResolve(renderer.instance)
      })
      .catch(() => renderer.readyReject())
    renderer.instance.submission = this.props.submission
    if (this.props.onChange) {
      renderer.instance.on('change', this.props.onChange)
    }
  }

  render() {
    return <div ref={this.element}></div>
  }
}

export default FormComponent
