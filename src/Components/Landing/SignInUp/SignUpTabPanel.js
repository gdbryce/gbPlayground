import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { Button, Divider, Stack } from '@mui/material'
import { auth, registerWithEmailAndPassword, signInWithGoogle} from "../../../Core/Firebase"

const SignUpTabPanel = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");

  return (
    <div>
      <Box
        noValidate
        component="form"
        autoComplete="off"
      >
        <Box
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiTextField-root': { 
              mr: 1, 
              width: '48%'
            },
          }}
        >
          <TextField 
            required
            id="SignUpFirstName"
            label="First Name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField 
            required
            id="SignUpLastName"
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <Divider>Sign Up with Username and Password</Divider>
        <TextField 
          fullWidth
          id="SignUpEmail"
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          fullWidth
          id="SignUpPassword"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          mt={2}
        >
          {email && password &&
            <Button 
              variant="contained"
              id="SignUpUsernamePassword"
              onClick={() => registerWithEmailAndPassword(firstName + ' ' + lastName, email, password)}
              >
              Sign Up
            </Button>
          }
          {(!email || !password || (!firstName || !lastName)) &&
            <Button 
              variant="contained"
              id="SignUpUsernamePassword"
              disabled
              >
              Sign Up
            </Button>
          }
        </Stack>
        <Divider>Or</Divider>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          mt={2}
        >
          <Button 
            variant="contained"
            id="SignUpGoogleAuth"
            onClick={() => signInWithGoogle()}
            >
            sign Up with google
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default SignUpTabPanel
