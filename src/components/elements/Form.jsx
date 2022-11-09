import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from './Buttons'
import { Link } from 'react-router-dom';

const Form = () => {



  return (


    <div className="form-section py-5">
      <Container fixed>

            <Card className='bg-orange p-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
                className='text-center'
              >
                <h2 className="fw-bold mb-2 text-uppercase">SignUP</h2>
                <p className="mb-5">Please enter your detail for signup</p>
                <TextField id="email" fullWidth label="Email" variant="outlined" name='email' />
                <TextField id="password" className='mb-5' fullWidth label="Password" variant="outlined" name='password' value='' />
                <Button />
                <div>
                  <p className="mb-0">Already an account? <Link to="/signin" className="text-muted fw-bold">Sign In</Link></p>
                </div>
              </Box>
            </Card>
      </Container>
    </div>
  )
}

export default Form