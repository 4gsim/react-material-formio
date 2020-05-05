import React, { PureComponent } from 'react'
import Dialog from '@material-ui/core/Dialog'
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core'
import FormComponent from './Form'

class FormDialog extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      submission: props.submission || {
        data: {}
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit() {
    this.props.onSubmit(this.state.submission)
  }

  onChange(change) {
    if (change.changed) {
      // don't trigger a render when submission changes, the actual view is changed in the form
      let state = this.state
      state.submission = change
      this.setState(state)
    }
  }

  render() {
    return (
      <Dialog open={this.props.open}>
        <DialogTitle>{this.props.form.title}</DialogTitle>
        <DialogContent>
          <FormComponent
            form={this.props.form}
            submission={this.props.submission}
            onChange={this.onChange}
          ></FormComponent>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default FormDialog
