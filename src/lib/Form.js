import * as React from 'react'
import FormioForm from 'formiojs/Form'
import { useRef, useEffect } from 'react'

const FormComponent = ({ form, submission = {}, onChange }) => {
  const element = useRef(null)

  useEffect(() => {
    if (form) {
      let renderer = new FormioForm()
      renderer.instance = renderer.create('form')
      renderer.instance.viewContainer = () => element.current
      renderer.instance
        .setForm(form)
        .then(() => {
          renderer.readyResolve(renderer.instance)
        })
        .catch(() => renderer.readyReject())
      renderer.instance.submission = submission
      if (onChange) {
        renderer.instance.on('change', onChange)
      }
    }
  })

  return <div ref={element}></div>
}

export default FormComponent
