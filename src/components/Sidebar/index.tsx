import { Grid, Typography } from '@mui/material';

// Components
import MenuButton from 'components/MenuButton';
import ThemeToggle from 'components/ThemeToggle';

// Icons
import {
  RiGroupLine as UsersIcon,
  RiBookOpenLine as FoodMenuIcon,
  RiRestaurant2Line as MealIcon,
  RiMedalLine as MembershipIcon,
} from 'react-icons/ri';

// Helpers
import { Routes } from 'helpers/constants';
import { useStyles } from './styles';
import { useIsScreenSizeDown } from 'hooks/ScreenSize';

const Sidebar = () => {
  const classes = useStyles();
  const isSmallScreen = useIsScreenSizeDown('sm');

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <Grid container>
        <ThemeToggle />
      </Grid>

      <Grid container item xs={2} style={{ maxWidth: 'none' }}>
        {!isSmallScreen && (
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h3" style={{ fontWeight: 700 }}>
              NutriApp
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        item
        xs={9}
        style={{ maxWidth: 'none' }}
        direction="column"
        justifyContent={isSmallScreen ? 'flex-start' : 'center'}
        alignItems="flex-start"
      >
        <MenuButton path={Routes.USERS} title="Users" icon={UsersIcon} />
        <MenuButton
          path={Routes.FOOD_MENUS}
          title="Menus"
          icon={FoodMenuIcon}
        />
        <MenuButton path={Routes.MEALS} title="Meals" icon={MealIcon} />
        <MenuButton
          path={Routes.MEMBERSHIP}
          title="Membership"
          icon={MembershipIcon}
        />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
