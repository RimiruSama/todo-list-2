import React, { useState } from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMutation, useQueryClient } from 'react-query';
import productService from '../redux/services/productService';
import { useNavigate } from 'react-router-dom';

const CategoryCreate = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Show');

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    }

    const mutation: any = useMutation((data) => productService.createCategory(data), {
        onSuccess: data => {
            queryClient.setQueryData('categories', (oldData: any) => {
                oldData.push(data);
                return oldData;
            });
            // queryClient.invalidateQueries('categories');
        },
        onError: (error: Error) => {
            console.log(error.message)
        }
    });

    const HandleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        mutation.mutate({name, status});
        navigate('/category-list');
    }

    return (
        <>
            <h1>Create Category</h1>
            <Box
                component="form"
                onSubmit={HandleSubmit}
                sx={{
                    width: '60%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}
            >
                <TextField
                    required
                    id="category-name"
                    label="Category Name"
                    variant="outlined"
                    value={name}
                    onChange={onNameChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={onStatusChange}
                    >
                        <MenuItem value={'Show'}>Show</MenuItem>
                        <MenuItem value={'Hide'}>Hide</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    size="large"
                    type='submit'
                >{mutation.isLoading ? 'Saving...' : mutation.isError ? mutation.error.message: 'Create'}</Button>
            </Box>
        </>
    )
}

export default CategoryCreate