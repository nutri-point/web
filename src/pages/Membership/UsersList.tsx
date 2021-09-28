import { Grid } from '@mui/material';
import { UserGetResponse } from 'services';
import UserCard from './UserCard';

import { useListStyles } from './styles';

interface Props {
  readonly users: UserGetResponse[];
}

const UsersList = ({ users }: Props) => {
  const classes = useListStyles();

  return (
    <Grid container justifyContent="center" className={classes.container}>
      {users.map((user) => (
        <Grid item key={user.id} xs={12} md={6}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
