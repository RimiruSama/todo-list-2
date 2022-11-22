import {useEffect, useState} from "react";
import {useAppSelector, useAppDispatch} from "../hooks";
import {reset, getAllProducts, getProductByCategory} from '../redux/features/productSlice';
import {Stack, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import {useQuery} from "react-query";
import productService from '../redux/services/productService';

const ProductList = () => {
    // const dispatch = useAppDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    let category = searchParams.get('category')
    // const {products} = useAppSelector((state) => state.product)

    // useEffect(() => {
    //     if (!category) {
    //         dispatch(getAllProducts());
    //     } else {
    //         dispatch(getProductByCategory(category))
    //     }
    // }, [category]);

    const res: any = useQuery(['products'], productService.getAllProduct);

    if (res.isLoading) {
        return (<span>Loading...</span>)
    }

    if (res.isError) {
        return (<span>Error: {res.error.message}</span>)
    }

    return (
        <div>
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
                        <Card sx={{maxWidth: 345}} key={index}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Stack>
        </div>
    )
}

export default ProductList;