import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const MaterialComponent = ({ instance, children }) => {
  const [value, setValue] = useState(instance.dataValue)
  const [validity, setValidity] = useState({
    isValid: true
  })

  instance.on('componentError', (error) => {
    setValidity((v) => ({
      ...v,
      message: error.message
    }))
  })

  useEffect(() => {
    setValue(instance.dataValue)
  }, [instance.dataValue])

  function onChange(val) {
    if (val === undefined || val === null) {
      val = instance.emptyValue
    }
    instance.updateValue(val, { modified: true })
    setValue(val)
  }

  function onBlur() {
    instance.checkComponentValidity(value, true, null, true).then((result) => {
      setValidity((v) => ({
        ...v,
        isValid: result
      }))
    })
  }

  if (!children) {
    return (
      <Card>
        <CardContent>Unknown Component: {instance.component.type}</CardContent>
      </Card>
    )
  } else {
    return <div>{children(onChange, onBlur, value, validity)}</div>
  }
}

export default MaterialComponent
