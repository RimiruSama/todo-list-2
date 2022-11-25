import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { reset, getAllProducts } from '../redux/features/productSlice';
import { Stack, Card, CardContent, CardMedia, Typography, Box, Button, CardActions } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useQuery } from "react-query";
import productService from '../redux/services/productService';

const ProductList = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    let category = searchParams.get('category')

    const res: any = useQuery(
        ['products', category],
        () => productService.getAllProductRQ(category)
    );

    if (res.isLoading) {
        return (<span>Loading...</span>)
    }

    if (res.isError) {
        return (<span>Error: {res.error.message}</span>)
    }

    const handleCreateProdClick = () => {
        navigate('/product-create');
    }

    return (
        <div>
            <Box
                sx={{ 
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Button
                    variant="outlined"
                    onClick={handleCreateProdClick}
                >
                    Create Product
                </Button>
            </Box>
            <h1>{category ? category : 'Product List'}</h1>
            <Stack
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={{
                    flexWrap: 'wrap',
                    gap: '20px'
                }}
            >
                {res.data.map((item: any, index: number) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={index}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions 
                                sx={{ 
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Button sx={{ width: "50%" }} size="small" color='secondary'>Edit</Button>
                                <Button sx={{ width: "50%" }} size="small" color='error'>Delete</Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </Stack>
        </div>
    )
}

export default ProductList;