import { alpha, Grid, Typography } from '@mui/material';
import { IconType } from 'react-icons/lib';
import { useStyles } from './styles';

type Props = {
  readonly color: string;
  readonly Icon: IconType;
  readonly label: string;
};

const CustomChip = ({ color, Icon, label }: Props) => {
  const classes = useStyles();
  const backgroundColor = alpha(color, 0.1);

  return (
    <Grid
      container
      className={classes.container}
      style={{ backgroundColor, color }}
      alignItems="center"
    >
      <Icon size={20} />
      <Typography className={classes.label}>{label}</Typography>
    </Grid>
  );
};

export default CustomChip;
