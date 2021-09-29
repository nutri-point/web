import { Grid } from '@mui/material';
import { UserGetResponse } from 'services';
import UserCard from './UserCard';

import { useListStyles } from './styles';

interface Props {
  readonly users: UserGetResponse[];
  readonly onRoleChange: () => void;
}

const UsersList = ({ users, onRoleChange }: Props) => {
  const classes = useListStyles();

  return (
    <Grid container className={classes.container}>
      {users.map((user) => (
        <Grid item className={classes.card} key={user.id} xs={12} md={6}>
          <UserCard user={user} onRoleChange={onRoleChange} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
