import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from './Buttons'
import { Link } from 'react-router-dom';

const Form = ({ title, setName, setEmail, setPassword, handleAction }) => {

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
                <h2 className="fw-bold mb-2 text-uppercase">{title} Form</h2>
                <p className="mb-5">Please enter your detail for signup</p>
                <TextField id="name" fullWidth label="Name" type="text" variant="outlined" onChange={(e) => setName(e.target.value)} /> <br />
                <TextField id="email" fullWidth label="Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} /> <br />
                <TextField id="password" className='mb-5' fullWidth label="Password" type='password' variant="outlined" onChange={(e) => setPassword(e.target.value)} /> <br />
                <Button title={title} handleAction={handleAction} />
                <div>
                  <p className="mb-0">Already an account? <Link to="/register" className="text-muted fw-bold">Sign In</Link></p>
                </div>
              </Box>
            </Card>
      </Container>
    </div>
    
  )
}

export default Form