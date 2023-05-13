import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function ProductPage(props) {
    const {products, selectedProductId} = props;

    const addToCartHandle = () => {
        props.globalsetState((state) => {
            let userProducts = state.userProducts;
            if (selectedProductId in userProducts) {
                let no = userProducts[selectedProductId];
                userProducts = { ...userProducts, [selectedProductId]: ++no };
            } else {
                userProducts = { ...userProducts, [selectedProductId]: 1 };
            }
            return {
                ...state, userProducts
            };
        })
    }
    
    let product = {};
    Object.keys(products).forEach((key) => {
        if(key === selectedProductId) {
            product = products[key];
        }
    })
    return (
        <Container sx={{ marginTop: '100px', }}>
            <Grid container spacing={4}>
                <Grid item xs={6}>

                    <img src={product.img}
                        width="400px"
                        height="400px"
                        alt={product.name}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={12} direction='column'>
                        <Grid item xs={2}> 
                        <Typography variant='h3'>{product.name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='body1'>{product.details}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='body 1'>Rs. {product.price}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={addToCartHandle}>
                                Add to Cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductPage;