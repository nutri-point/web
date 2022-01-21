import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { UserGetResponse } from 'services';

import { useTableStyles } from './styles';
import UserTableRow from './UserTableRow';

type Props = {
  readonly users: UserGetResponse[];
  readonly areMembers: boolean;
  readonly onRoleChange: () => Promise<void>;
};

const UserTable = ({ users, areMembers, onRoleChange }: Props) => {
  const classes = useTableStyles();

  return (
    <Grid container className={classes.container} justifyContent="center">
      <Grid item xs={12} sm={10}>
        <TableContainer component={Paper} className={classes.tablePaper}>
          <Table>
            <TableHead>
              <TableRow className={classes.headerRow}>
                <TableCell className={classes.headerCell}>Full Name</TableCell>
                {areMembers && (
                  <TableCell className={classes.headerCell}>
                    Member since
                  </TableCell>
                )}
                <TableCell className={classes.headerCell}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <UserTableRow user={user} onRoleChange={onRoleChange} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default UserTable;
