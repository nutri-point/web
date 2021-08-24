import { TextField, TextFieldProps } from '@material-ui/core';

const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField {...props} variant="filled" fullWidth>
      {props.children}
    </TextField>
  );
};

export default CustomTextField;
