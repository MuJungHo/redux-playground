import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogin } from '../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))

const LoginPage = () => {

  const classes = useStyles();

  const [email, setEmail] = React.useState('')

  const [passWord, setPassword] = React.useState('')

  const [locale, selectLocale] = React.useState('en')

  const dispatch = useDispatch()

  const handleChange = event => {
    selectLocale(event.target.value)
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={ e => {
          e.preventDefault()
          dispatch(doLogin({ email, passWord, locale }))
        }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel>locale</InputLabel>
            <Select
              value={locale}
              onChange={handleChange}
              label="locale"
            >
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'zh'}>繁體中文</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default LoginPage
