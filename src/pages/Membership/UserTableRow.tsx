import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Button,
  CircularProgress,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { UserGetResponse, UserService } from 'services';

import {
  RiLockUnlockLine as GiveAccessIcon,
  RiCloseCircleFill as RevokeAccessIcon,
} from 'react-icons/ri';

// Helpers
import { useTableRowStyles } from './styles';
import { formatDate } from 'helpers';
import { Role } from 'services/constants';
import messages from './messages';

interface Props {
  readonly user: UserGetResponse;
  readonly onRoleChange: () => Promise<void>;
}

const UserTableRow = ({ user, onRoleChange }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const classes = useTableRowStyles();
  const isMember = user.roleId === Role.Member;

  const onGrantAccess = async () => {
    setIsSubmitting(true);

    try {
      await UserService.setMemberRole(user.id);
      await onRoleChange();
      toast.success('Member access granted.');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onRevokeAccess = async () => {
    setIsSubmitting(true);
    try {
      await UserService.setGuestRole(user.id);
      await onRoleChange();
      toast.warning('Member access revoked.');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TableRow className={classes.row} key={user.id}>
      <TableCell component="th" scope="row">
        <Typography>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2">{user.email}</Typography>
      </TableCell>
      {isMember && <TableCell>{formatDate(user.createdAt) || 'N/A'}</TableCell>}
      <TableCell align="right">
        {isMember ? (
          <Button
            variant="outlined"
            color="error"
            startIcon={<RevokeAccessIcon />}
            onClick={onRevokeAccess}
          >
            {isSubmitting ? (
              <CircularProgress color="error" size={24} thickness={6} />
            ) : (
              messages.revokeAccess
            )}
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="success"
            startIcon={<GiveAccessIcon />}
            onClick={onGrantAccess}
          >
            {isSubmitting ? (
              <CircularProgress color="success" size={24} thickness={6} />
            ) : (
              messages.giveAccess
            )}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default UserTableRow;
