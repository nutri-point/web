import { Paper } from '@material-ui/core';
import { UserGetResponse } from 'services';

import { useCardStyles } from './styles';

interface Props {
  readonly user: UserGetResponse;
}

const UserCard = ({ user }: Props) => {
  const classes = useCardStyles();

  return (
    <Paper variant="outlined" className={classes.card}>
      {user.email}
    </Paper>
  );
};

export default UserCard;
