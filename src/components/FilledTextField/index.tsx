import { TextField, TextFieldProps } from '@mui/material';

const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField {...props} variant="filled" fullWidth>
      {props.children}
    </TextField>
  );
};

export default CustomTextField;
