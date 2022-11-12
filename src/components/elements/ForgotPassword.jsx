import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';



const ForgotPassword = ({title, updateEmail, setEmail}) => {

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
                <p className="mb-5">Please enter your Email</p>
                <TextField id="email" fullWidth label="Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <Button variant="contained" onClick={updateEmail}>{title}</Button>
              </Box>
            </Card>
          </Container>
        </div>
    
      )
}

export default ForgotPassword;