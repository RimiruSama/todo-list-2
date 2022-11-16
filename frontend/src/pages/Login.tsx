import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Typography, Stack, Box, TextField, Button } from '@mui/material';
import {useAppSelector, useAppDispatch} from '../hooks';
import {login} from '../redux/features/authSlice';

interface loginUser {
    email: string,
    password: string
}

const Login = () => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState<loginUser>({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const userLogined = useAppSelector((state) => state.auth)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        );

    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const userData = {
            email, 
            password
        }
        dispatch(login(userData))

        toast.success('login success');
    }

    return (
        <>
            <Stack
                spacing={2}
                sx={{
                    marginBottom: '3rem'
                }}
            >
                <Typography
                    variant='h2'
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}
                >
                    <FaSignInAlt /> Login
                </Typography>

                <Typography
                    variant='h5'
                    sx={{
                        color: '#12121291',
                        fontWeight: '600'
                    }}
                >
                    Please login to get support
                </Typography>
            </Stack>
            <Box
                component='form'
                onSubmit={onSubmit}
                sx={{
                    width: '50%',
                    margin: '0 auto'
                }}
            >
                <Stack
                    direction='column'
                    spacing={3}
                >
                    <TextField
                        id="email"
                        name='email'
                        label="Email"
                        placeholder="Enter your email"
                        // multiline
                        type='email'
                        value={email}
                        onChange={onChange}
                        required
                    />

                    <TextField
                        id="password"
                        name='password'
                        label="Password"
                        placeholder="Enter your password"
                        // multiline
                        type='password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                    
                    <Button
                        type='submit' 
                        size='large'
                        variant='contained'
                        color='success'
                    >
                        Submit
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default Login;

