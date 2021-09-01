import { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';

import {
  CircularProgress,
  Grid,
  Tab,
  Tabs,
  Theme,
  useMediaQuery,
} from '@material-ui/core';
import UsersList from './UsersList';

import { UserGetResponse, UserService } from 'services';
import { Role } from 'services/constants';

import { useStyles } from './styles';

const tabsMap = {
  members: { id: 0, name: 'Members' },
  guests: { id: 1, name: 'Guests' },
};

const Membership = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [guests, setGuests] = useState<UserGetResponse[]>([]);
  const [members, setMembers] = useState<UserGetResponse[]>([]);
  const [tabValue, setTabValue] = useState(tabsMap.members.id);

  const classes = useStyles();

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const fetchUsers = async () => {
    setIsLoading(true);

    const { data } = await UserService.getAll();
    const { members, guests } = getByRole(data);

    setMembers(members);
    setGuests(guests);

    setIsLoading(false);
  };

  const getByRole = (users: UserGetResponse[]) => {
    const members: UserGetResponse[] = [];
    const guests: UserGetResponse[] = [];

    users.map((user) => {
      if (user.roleId === Role.Guest) {
        guests.push(user);
      } else if (user.roleId === Role.Member) {
        members.push(user);
      }
    });

    return { members, guests };
  };

  const onTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(`newValue`, newValue);
    setTabValue(newValue);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const loadingIndicator = <CircularProgress size="2rem" thickness={5} />;

  const selectedUsers = useMemo(
    () => (tabValue === tabsMap.members.id ? members : guests),
    [tabValue, members, guests],
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          onChange={onTabChange}
          indicatorColor="primary"
          variant={isSmallScreen ? 'fullWidth' : 'standard'}
          centered
        >
          {Object.values(tabsMap).map((tab) => (
            <Tab
              className={classnames(classes.tab, {
                [classes.bigTab]: !isSmallScreen,
              })}
              value={tab.id}
              label={tab.name}
            />
          ))}
        </Tabs>
        <UsersList users={selectedUsers} />
      </Grid>
    </Grid>
  );
};

export default Membership;
