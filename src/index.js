import Components from 'formiojs/components/Components'
import './lib/Webform'
import { getComponents } from './lib/components'
const Formio = require('formiojs/Formio').default
;(function initRenderer() {
  Components.setComponents(getComponents())
  Formio.Components = Components
})()

export { default as Form } from './lib/Form'
