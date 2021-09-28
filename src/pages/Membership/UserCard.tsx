import {
  Button,
  Chip,
  Grid,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { UserGetResponse } from 'services';

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

interface Props {
  readonly user: UserGetResponse;
}

const UserCard = ({ user }: Props) => {
  const classes = useCardStyles();

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const age = getAge(user.dateOfBirth);
  const isMember = user.roleId === Role.Member;

  const alignItems = isSmallScreen ? 'center' : undefined;

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
        <Grid item xs={12} className={classes.item}>
          <Typography variant="body2">{user.email}</Typography>
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
          <Grid container className={classes.item}>
            <Grid item xs={12}>
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
        <Grid item xs={isSmallScreen ? 12 : undefined}>
          {isMember ? (
            <Button
              variant="outlined"
              color="error"
              startIcon={<RevokeAccessIcon />}
              fullWidth={isSmallScreen}
            >
              {messages.revokeAccess}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              startIcon={<GiveAccessIcon />}
              fullWidth={isSmallScreen}
            >
              {messages.giveAccess}
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCard;
