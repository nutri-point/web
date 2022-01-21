import { IconType } from 'react-icons';
import { Button, Grid } from '@mui/material';
import { useStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { useIsScreenSize } from 'hooks/ScreenSize';

type Props = {
  readonly title: string;
  readonly icon: IconType;
  readonly path: string;
};

const MenuItem = ({ icon: Icon, title, path }: Props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const isActive = pathname === path;

  const isSmallScreen = useIsScreenSize('xs');

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Grid item xs={isSmallScreen ? undefined : 8}>
        <Link to={path} className={classes.link}>
          <Button
            fullWidth
            className={classnames(classes.button, {
              [classes.buttonActive]: isActive,
            })}
            size="large"
          >
            <Grid container justifyContent="space-around" alignItems="center">
              <Icon size={25} />
              {!isSmallScreen && (
                <Grid item sm={12} md={8} lg={10}>
                  {title}
                </Grid>
              )}
            </Grid>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default MenuItem;
