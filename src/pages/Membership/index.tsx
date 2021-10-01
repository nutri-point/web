import { useCallback, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';

import { CircularProgress, Grid, Tab, Tabs } from '@mui/material';
import UsersList from './UsersList';

import { UserGetResponse, UserService } from 'services';
import { Role } from 'services/constants';

import { useStyles } from './styles';
import { TabsEnum, TabValues } from './constants';
import { useIsScreenSizeDown } from 'hooks/ScreenSize';

const Membership = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [guests, setGuests] = useState<UserGetResponse[]>([]);
  const [members, setMembers] = useState<UserGetResponse[]>([]);
  const [tabValue, setTabValue] = useState<TabsEnum>(TabsEnum.Members);

  const classes = useStyles();

  const isSmallScreen = useIsScreenSizeDown('sm');

  const getByRole = useCallback((users: UserGetResponse[]) => {
    const members: UserGetResponse[] = [];
    const guests: UserGetResponse[] = [];

    // eslint-disable-next-line array-callback-return
    users.map((user) => {
      if (user.roleId === Role.Guest) {
        guests.push(user);
      } else if (user.roleId === Role.Member) {
        members.push(user);
      }
    });

    return { members, guests };
  }, []);

  const fetchUsers = useCallback(
    async (isInitialLoad = true) => {
      setIsLoading(isInitialLoad);

      const { data } = await UserService.getAll();
      const { members, guests } = getByRole(data);

      setMembers(members);
      setGuests(guests);

      setIsLoading(false);
    },
    [getByRole],
  );

  const onTabChange = (event: React.ChangeEvent<{}>, newValue: TabsEnum) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onRoleChange = () => fetchUsers(false);

  const selectedUsers = useMemo(
    () => (tabValue === TabsEnum.Members ? members : guests),
    [tabValue, members, guests],
  );

  const loadingIndicator = (
    <Grid container justifyContent="center" style={{ paddingTop: '2rem' }}>
      <Grid item>
        <CircularProgress size="3rem" thickness={5} />
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          onChange={onTabChange}
          variant={isSmallScreen ? 'fullWidth' : 'standard'}
          centered
        >
          {TabValues.map((tab) => (
            <Tab
              key={tab.value}
              className={classnames(classes.tab, {
                [classes.bigTab]: !isSmallScreen,
              })}
              value={tab.value}
              label={tab.label}
              icon={<tab.icon size={25} />}
            />
          ))}
        </Tabs>
        {isLoading ? (
          loadingIndicator
        ) : (
          <Grid item xs={12}>
            <UsersList users={selectedUsers} onRoleChange={onRoleChange} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Membership;
