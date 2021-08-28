import { IconType } from 'react-icons';
import { Button, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

interface Props {
  readonly title: string;
  readonly icon: IconType;
  readonly path: string;
}

const MenuItem = ({ icon: Icon, title, path }: Props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const isActive = pathname === path;

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Grid item xs={8}>
        <Link to={path}>
          <Button
            fullWidth
            className={classnames(classes.button, {
              [classes.buttonActive]: isActive,
            })}
            size="large"
          >
            <Grid container justifyContent="space-around" alignItems="center">
              <Icon size={25} />
              <Grid item xs={10}>
                {title}
              </Grid>
            </Grid>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default MenuItem;
