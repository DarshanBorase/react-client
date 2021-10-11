import React from 'react';
import { headingStyle, inputContainer } from '../../component/TextField/style';
import TextField from '../../component/TextField/TextField';

const TextFieldDemo = () => (
  <div style={inputContainer}>
    <h4 style={headingStyle}><b>This is a Disabled input</b></h4>
    <TextField value="Disable Input" disabled />
    <h4 style={headingStyle}><b>A Valid Input</b></h4>
    <TextField value="Accessible" disabled={false} />
    <h4 style={headingStyle}><b>An Input with an errors</b></h4>
    <TextField value="101" errorMessage="Could not be greater than" disabled={false} />
  </div>
);

export default TextFieldDemo;

