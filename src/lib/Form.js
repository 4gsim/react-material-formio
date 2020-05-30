import FormioForm from 'formiojs/Form'
import React, { createRef, PureComponent } from 'react'

class FormComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      children: []
    }
    this.element = createRef()
  }

  componentDidMount() {
    const submission = this.props.submission || { data: {} }
    let renderer = new FormioForm()
    renderer.instance = renderer.create('form')
    renderer.instance.viewContainer = this
    renderer.instance
      .setForm(this.props.form)
      .then(() => {
        renderer.readyResolve(renderer.instance)
      })
      .catch(() => renderer.readyReject())
    renderer.instance.setSubmission(submission, {
      dirty: true
    })
    if (this.props.onChange) {
      renderer.instance.on('change', this.props.onChange)
    }
  }

  render() {
    return <div>{this.state.children}</div>
  }
}

export default FormComponent
