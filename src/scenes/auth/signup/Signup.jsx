import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AnimationBackground from '~/components/AnimationBackground'
import { useNavigate } from 'react-router-dom'

const defaultTheme = createTheme()

function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      username: data.get('username'),
      password: data.get('password'),
      email: data.get('email')
    })
  }
  // Define handleClick function
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <Box
      height={'100vh'}
      justifyContent={'center'}
      display={'flex'}
      alignItems={'center'}
    >
      <AnimationBackground/>
      <Box
        width={'350px'}
        height={'480px'}
        boxShadow={'0 4px 20px rgba(0, 0, 0, 0.2)'}
        position={'absolute'}
        bgcolor={'white'}
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
            Sign up
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button onClick={handleClick}
                  type="submit"
                  width= '50px'
                  boxShadow={'0 4px 20px rgba(0, 0, 0, 0.2)'}
                  variant="contained"
                  sx={{ mt: 2, mb: 2, ml: 13 }}
                >
              Sign In
                </Button>
                <Grid container sx={{ display: 'block', textAlign: 'center' }}>
                  <Grid item xs mb={'5px'}>
                    <Link href="#" variant="body2">
                  Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </Box>
  )
}

export default Signup