import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { toast } from 'react-toastify';
import { UserGetResponse, UserService } from 'services';

import messages from './messages';

import {
  RiLockUnlockLine as GiveAccessIcon,
  RiCloseCircleFill as RevokeAccessIcon,
  RiTimeLine as ClockIcon,
  RiRulerLine as RulerIcon,
  RiScales3Line as ScaleIcon,
} from 'react-icons/ri';

import { useCardStyles } from './styles';
import { Role } from 'services/constants';
import { formatDate, getAge } from 'helpers';
import CustomChip from 'components/CustomChip';
import colors from 'components/Theme/colors';
import { useState } from 'react';
import axios from 'axios';

interface Props {
  readonly user: UserGetResponse;
  readonly onRoleChange: () => void;
}

const UserCard = ({ user, onRoleChange }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const classes = useCardStyles();

  const isSmallerScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('lg'),
  );

  const age = getAge(user.dateOfBirth);
  const isMember = user.roleId === Role.Member;

  const alignItems = isSmallerScreen ? 'center' : undefined;

  const onGrantAccess = async () => {
    setIsSubmitting(true);

    try {
      await UserService.setMemberRole(user.id);
      onRoleChange();
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
      onRoleChange();
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
    <Paper variant="outlined" className={classes.card}>
      <Grid container direction="column" alignItems={alignItems}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.header}
            direction="column"
            alignItems={alignItems}
          >
            <Grid item xs={12} className={classes.name}>
              <Typography variant="h2">
                {user.firstName} {user.lastName}
              </Typography>
            </Grid>
            <Grid container justifyContent={alignItems} spacing={1}>
              <Grid item className={classes.chip}>
                <CustomChip
                  Icon={ClockIcon}
                  color={colors.lightBlue}
                  label={`${age} ${messages.yearsOld}`}
                />
              </Grid>

              <Grid item className={classes.chip}>
                <CustomChip
                  Icon={RulerIcon}
                  color={colors.orange}
                  label={`${user.height} ${messages.centimetersShort}`}
                />
              </Grid>

              <Grid item className={classes.chip}>
                <CustomChip
                  Icon={ScaleIcon}
                  color={colors.lightGreen}
                  label={`${user.weight} ${messages.kilogramsShort}`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.item}
          direction="column"
          alignItems={alignItems}
        >
          <Grid item>
            <Typography>{messages.email}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{user.email}</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.item}
          direction="column"
          alignItems={alignItems}
        >
          <Grid item>
            <Typography>{messages.createdAt}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              {formatDate(user.createdAt)}
            </Typography>
          </Grid>
        </Grid>
        {isMember && user.memberSince && (
          <Grid
            container
            className={classes.item}
            direction="column"
            alignItems={alignItems}
          >
            <Grid item>
              <Typography>{messages.memberSince}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {formatDate(user.memberSince)}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item xs={isSmallerScreen ? 12 : undefined}>
          {isMember ? (
            <Button
              variant="outlined"
              color="error"
              startIcon={<RevokeAccessIcon />}
              fullWidth={isSmallerScreen}
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
              fullWidth={isSmallerScreen}
              onClick={onGrantAccess}
            >
              {isSubmitting ? (
                <CircularProgress color="success" size={24} thickness={6} />
              ) : (
                messages.giveAccess
              )}
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCard;
