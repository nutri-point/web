import { Grid } from '@material-ui/core';
import { UserGetResponse } from 'services';
import UserCard from './UserCard';

interface Props {
  readonly users: UserGetResponse[];
}

const UsersList = ({ users }: Props) => {
  return (
    <Grid container justifyContent="center">
      {users.map((user) => (
        <Grid item>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
