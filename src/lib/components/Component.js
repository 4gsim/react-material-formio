import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const MaterialComponent = ({ instance, children }) => {
  const [value, setValue] = useState(instance.dataValue)

  useEffect(() => {
    instance.setMaterialValue = setValue
  }, [])

  function onChange(val) {
    if (val === undefined || val === null) {
      val = instance.emptyValue
    }
    instance.updateValue(val, { dirty: true, modified: true })
    setValue(instance.dataValue)
  }

  if (!children) {
    return (
      <Card>
        <CardContent>Unknown Component: {instance.component.type}</CardContent>
      </Card>
    )
  } else {
    return (
      <div style={{ marginBottom: '10px' }}>
        {children(value, onChange)}
      </div>
    )
  }
}

export default MaterialComponent
