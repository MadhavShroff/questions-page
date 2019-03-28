import TextField from '@material-ui/core/TextField';
import React from 'react';

class textField extends React.Component {
    render() {
        return <TextField
            id="answer"
            label="Answer"
            onChange={this.props.handleChange}
            multiline
            rows="4"
            variant="outlined"
        />
    }
}

export default textField;