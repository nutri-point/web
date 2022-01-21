import { useCallback, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import { RiSearchLine as SearchIcon } from 'react-icons/ri';

import { Grid, InputAdornment, Tab, Tabs, TextField } from '@mui/material';
import LoadingIndicator from 'components/LoadingIndicator';
import UserTable from './UserTable';

import { UserGetResponse, UserService } from 'services';
import { Role } from 'services/constants';

import { useStyles } from './styles';
import { TabsEnum, TabValues } from './constants';
import { useIsScreenSizeDown } from 'hooks/ScreenSize';
import messages from './messages';
import { hasSubstring } from 'helpers';

const Membership = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [guests, setGuests] = useState<UserGetResponse[]>([]);
  const [members, setMembers] = useState<UserGetResponse[]>([]);
  const [tabValue, setTabValue] = useState<TabsEnum>(TabsEnum.Members);
  const [searchValue, setSearchValue] = useState('');

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

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const areMembersSelected = useMemo(
    () => tabValue === TabsEnum.Members,
    [tabValue],
  );

  const selectedUsers = useMemo(() => {
    const selected = areMembersSelected ? members : guests;

    const filtered = selected.filter(
      (user) =>
        hasSubstring(user.firstName, searchValue) ||
        hasSubstring(user.lastName, searchValue) ||
        hasSubstring(user.email, searchValue),
    );

    return filtered;
  }, [areMembersSelected, members, guests, searchValue]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs
          className={classes.tabs}
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
          <LoadingIndicator />
        ) : (
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <TextField
                    fullWidth
                    className={classes.searchField}
                    variant="outlined"
                    placeholder={messages.searchPlaceholder}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    value={searchValue}
                    onChange={onSearchValueChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <UserTable
                users={selectedUsers}
                areMembers={areMembersSelected}
                onRoleChange={onRoleChange}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Membership;
