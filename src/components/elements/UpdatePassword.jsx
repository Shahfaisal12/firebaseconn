import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const UpdatePassword = ({ title, setEmail, setPassword, setNPassword, updatePass }) => {

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
                        className='text-center'>
                        <h2 className="fw-bold mb-2 text-uppercase">{title} Form</h2>
                        <p className="mb-5">Please enter your Old Password and then New Password</p>
                        <TextField id="email" fullWidth label="Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        <TextField id="password" fullWidth label="Old Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        <TextField className='mb-5' id="password" fullWidth label="New Password" type="password" variant="outlined" onChange={(e) => setNPassword(e.target.value)} />
                        <Button variant="contained" onClick={updatePass}>{title}</Button>
                        <p className="mb-0">Already an account? <Link to="/Login" className="text-muted fw-bold">Login</Link></p>
                    </Box>
                </Card>
            </Container>
        </div>
    )
}

export default UpdatePassword;