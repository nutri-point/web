import { useState } from 'react';
import { Formik, Form } from 'formik';

// Components
import {
  Typography,
  Grid,
  Button,
  Link,
  CircularProgress,
} from '@material-ui/core';
import FilledTextField from 'components/FilledTextField';

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

  const onSignIn = async (values: SignInFormValues) => {
    setIsLoading(true);

    const { email, password } = values;

    // TODO: handle errors
    dispatch(logIn(email, password));
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        // xs={false}
        sm={4}
        md={6}
        lg={7}
        xl={8}
        className={classes.image}
      />
      <Grid
        container
        item
        xs={12}
        sm={8}
        md={6}
        lg={5}
        xl={4}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item className={classes.paper}>
          <Typography component="h1" variant="h3" style={{ fontWeight: 700 }}>
            {messages.pageTitle}
          </Typography>

          {/* TODO: Add form validation */}
          <Formik
            initialValues={INITIAL_SIGNIN_FORM_VALUES}
            onSubmit={onSignIn}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form className={classes.form} noValidate>
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} lg={10} xl={9}>
                    <FilledTextField
                      id="email"
                      name="email"
                      label={messages.emailAddressLabel}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      autoFocus
                      required
                    />
                  </Grid>
                  <Grid item xs={12} lg={10} xl={9}>
                    <FilledTextField
                      id="password"
                      name="password"
                      label={messages.passwordLabel}
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="current-password"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
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
                        messages.signInButton
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
