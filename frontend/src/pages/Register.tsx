import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Typography, Stack, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../hooks';
import {register, reset} from '../redux/features/authSlice';

interface registerUser {
    name: string,
    email: string,
    password: string,
    password2: string
}

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<registerUser>({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const {user, isSuccess, isError, isLoading, message} = useAppSelector((state) => state.auth)

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

        if (password !== password2) {
            toast.error('Passwords do not match!');
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData));
        }
    }

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        // Redirect when logged in
        if(isSuccess || user) {
            navigate('/');
        } 

        dispatch(reset());
    }, [isError, isSuccess, user, message]);

    return (
        <>
            <Stack
                spacing={2}
                sx={{
                    marginBottom: '3rem'
                }}
            >
                <Typography variant='h2'>
                    <FaUser /> Register
                </Typography>

                <Typography
                    variant='h5'
                    sx={{
                        color: '#12121291',
                        fontWeight: '600'
                    }}
                >
                    Please create an account {name ?  'adf' : '123'}
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
                        id="name"
                        name='name'
                        label="Name"
                        placeholder="Enter your name"
                        // multiline
                        type='text'
                        value={name}
                        onChange={onChange}
                        required
                    />

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

                    <TextField
                        id="password2"
                        name='password2'
                        label="Confirm Password"
                        placeholder="confirm your password"
                        // multiline
                        type='password'
                        value={password2}
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

export default Register;