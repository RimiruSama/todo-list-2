import {useEffect} from "react";
import {useAppSelector, useAppDispatch} from "../hooks";
import {getAllCategories} from "../redux/features/productSlice";
import {Link} from 'react-router-dom';
import {Button, Stack} from "@mui/material";

const CategoryList = () => {
    const dispatch = useAppDispatch();
    const {categories} = useAppSelector((state) => state.product)

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

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
                {categories.map((item: any, index: number) => {
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