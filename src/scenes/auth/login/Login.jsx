import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AnimationBackground from '~/components/AnimationBackground'
import { useNavigate } from 'react-router-dom'
import { login } from '~/apis/auth'
const defaultTheme = createTheme()

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userData = {
      username: data.get('username'),
      password: data.get('password')
    }

    try {
      const response = await login(userData)
      if (response.status === 200) {
        const { access_token } = response.data
        console.log('User logged in successfully:', access_token)
        // Save the token in local storage or a state management library
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data)
    }
  }

  return (
    <Box height={'100vh'} justifyContent={'center'} display={'flex'} alignItems={'center'}>
      <AnimationBackground />
      <Box width={'350px'} height={'480px'} boxShadow={'0 4px 20px rgba(0, 0, 0, 0.2)'} position={'absolute'} bgcolor={'white'}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="username" label="User Name" name="username" autoComplete="username" autoFocus />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                <Button type="submit" width="50px" boxShadow={'0 4px 20px rgba(0, 0, 0, 0.2)'} variant="contained" sx={{ mt: 2, mb: 2, ml: 13 }}>
                  Sign In
                </Button>
                <Grid container sx={{ display: 'block', textAlign: 'center' }}>
                  <Grid item xs mb={'5px'}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" onClick={() => navigate('/signup')}>
                      {'Don\'t have an account? Sign Up'}
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
