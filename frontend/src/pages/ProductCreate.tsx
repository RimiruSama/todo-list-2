import React, { useState } from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import productService from '../redux/services/productService';
import { useNavigate } from 'react-router-dom';

interface Props {
    name?: string,
    description?: string,
    image?: string,
    category: string
}

const ProductCreate = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [data, setData] = useState<Props>({
        name: '',
        description: '',
        image: '',
        category: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const onCateChange = (event: SelectChangeEvent) => {
        setData({ ...data, category: event.target.value })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        mutation.mutate();
        navigate('/product-list');
    }

    const resCate: any = useQuery('categories', productService.getAllCategories);

    const mutation: any = useMutation(() => productService.createProduct({
        data
    }), {
        onSuccess: data => {
            // queryClient.setQueryData('products', data);
            queryClient.invalidateQueries('products');
        },
        onError: (error: Error) => {
            console.log(error.message);
        }
    })

    if (resCate.isLoading) {
        return (<span>Loading...</span>)
    }

    if (resCate.isError) {
        return (<span>Error: {resCate.error.message}</span>)
    }

    return (
        <>
            <h1>Create Product</h1>
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                    id="prod-name"
                    name="name"
                    label="Product Name"
                    variant="outlined"
                    value={data.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="prod-des"
                    name="description"
                    label="Product Description"
                    variant="outlined"
                    value={data.description}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="prod-img"
                    name="image"
                    label="Product Image"
                    variant="outlined"
                    // value={name}
                    onChange={handleChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="status"
                        value={data.category}
                        label="Category"
                        onChange={onCateChange}
                    >
                        {resCate?.data.map((item: any, index: number) => {
                            return (
                                <MenuItem key={index} value={item._id}>{item.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    size="large"
                    type='submit'
                >Create</Button>
            </Box>
        </>
    )
}

export default ProductCreate;