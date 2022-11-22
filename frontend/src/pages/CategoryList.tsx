import {useEffect} from "react";
import {useAppSelector, useAppDispatch} from "../hooks";
import {getAllCategories} from "../redux/features/productSlice";
import {Link} from 'react-router-dom';
import {Button, Stack} from "@mui/material";
import {useQuery} from "react-query";
import productService from '../redux/services/productService';

const CategoryList = () => {
    // const dispatch = useAppDispatch();
    // const {categories} = useAppSelector((state) => state.product)
    //
    // useEffect(() => {
    //     dispatch(getAllCategories());
    // }, []);

    const res: any = useQuery(['categories'], productService.getAllCategories);

    if (res.isLoading) {
        return (<span>Loading...</span>)
    }

    if (res.isError) {
        return (<span>Error: {res.error.message}</span>)
    }

    return (
        <div>
            <h1>Categories</h1>
            <Stack
                direction='row'
                alignItems='flex-start'
                justifyContent='space-between'
                sx={{
                    flexWrap: 'wrap',
                    gap: '20px'
                }}
            >
                {res.data.map((item: any, index: number) => {
                    return (
                        <Button
                            key={index}
                            component={Link}
                            to={`/product-list?category=${item}`}
                        >
                            {item}
                        </Button>
                    );
                })}
            </Stack>
        </div>
    )
}

export default CategoryList;