import { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

// Components
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  CircularProgress,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// Services
import { GoalService } from 'services';

// Helpers
import { useStyles } from './styles';
import { INITIAL_SIGNIN_FORM_VALUES } from './constants';
import { MaterialRouterLink } from 'helpers';
import messages from './messages';
import { SignInFormValues } from './types';
import { logIn } from 'actions/session';
import { useDispatch } from 'react-redux';

const SignIn = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  const onSignIn = async (
    values: SignInFormValues,
    actions: FormikHelpers<SignInFormValues>,
  ) => {
    setIsLoading(true);

    const { email, password } = values;
    dispatch(logIn(email, password));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {messages.signIn}
        </Typography>
        <Formik initialValues={INITIAL_SIGNIN_FORM_VALUES} onSubmit={onSignIn}>
          {({ values, handleChange, handleBlur }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    label={messages.emailAddressLabel}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    autoComplete="email"
                    fullWidth
                    autoFocus
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label={messages.passwordLabel}
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    autoComplete="current-password"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isLoading}
                    fullWidth
                  >
                    {isLoading ? (
                      <CircularProgress
                        color="secondary"
                        size={24}
                        thickness={6}
                      />
                    ) : (
                      messages.logInButton
                    )}
                  </Button>
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => GoalService.getAllGoals()}
                fullWidth
              >
                Get Goals
              </Button>

              <Grid container alignItems="center" direction="column">
                <Grid item>
                  <Link
                    component={MaterialRouterLink}
                    to="/resetPassword"
                    variant="body2"
                  >
                    {messages.forgotPasswordQuestion}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignIn;
