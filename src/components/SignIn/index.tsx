import { useState } from 'react';
import { Formik, Form } from 'formik';

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

// Helpers
import { useStyles } from './styles';
import { INITIAL_SIGNIN_FORM_VALUES } from './constants';
import { MaterialRouterLink } from 'helpers';
import messages from './messages';

const SignIn = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log('signin');

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {messages.signIn}
        </Typography>
        <Formik
          initialValues={INITIAL_SIGNIN_FORM_VALUES}
          onSubmit={(values, actions) => {
            setIsLoading(true);

            // TODO: handle sign in
          }}
        >
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
