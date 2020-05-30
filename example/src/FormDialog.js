import React, { PureComponent } from 'react'
import Dialog from '@material-ui/core/Dialog'
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core'
import { Form } from 'react-material-formio'

class FormDialog extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isValid: true,
      submission: {
        data: {}
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit() {
    if (this.state.submission.isValid) {
      this.props.onSubmit(this.state.submission)
    }
  }

  onChange(change) {
    if (change.changed) {
      console.log(change)
      this.setState((s) => ({
        ...s,
        isValid: change.isValid,
        submission: change
      }))
    }
  }

  render() {
    return (
      <Dialog disableEnforceFocus open={this.props.open}>
        <DialogTitle>{this.props.form.title}</DialogTitle>
        <DialogContent>
          <Form
            form={this.props.form}
            submission={this.props.submission}
            onChange={this.onChange}
          ></Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color='primary'>
            Cancel
          </Button>
          <Button
            disabled={!this.state.isValid}
            onClick={this.handleSubmit}
            color='primary'
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default FormDialog
