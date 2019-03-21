
import TextField from '@material-ui/core/TextField';
import React from 'react';

function textField() {
    return <TextField
          id="answer"
          label="Answer"
          multiline
          rows="4"
          variant="outlined"
    />
}

export default textField;