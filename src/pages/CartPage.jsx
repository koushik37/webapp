import {
    Box, Button, Card, CardContent, CardMedia, Grid, Typography,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function CartPage(props) {
    const { cartProducts, products, globalsetState } = props;
    const history = useHistory();
    const [open, setOpen] = useState(false);
    let totalPrice = 0;

    const handleBuy = () => {
        setOpen(true);
        
    }
    const handleClose = () => {
        setOpen(false);
        globalsetState((prevState) => {
            return {
                ...prevState,
                userProducts: {}
            };
        })
        history.push("/");
    }
    return (
        <>
            {Object.keys(cartProducts).map(key => {
                let product = {};
                Object.keys(products).forEach(pKey => {
                    if (pKey === key) product = products[pKey];
                })
                console.log("product------> ", product);
                totalPrice += cartProducts[key] * product.price;
                return (
                    <Card key={key} sx={{ display: 'flex', width:'70%', margin:'30px auto',alignItems:"start",justifyContent:'center' }} >
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={product.img}
                            alt={product.name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h3" sx={{width: 500}}>
                                    {product.name}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}><Typography variant='body2'>{cartProducts[key]}</Typography></Grid>
                                    <Grid item xs={6}><Typography variant='body2'>{cartProducts[key] * product.price}</Typography></Grid>
                                </Grid>
                            </Box>
                        </Box>

                    </Card>
                );
            })}

            <Grid container spacing={12} sx={{ maxWidth:'70%', margin:'auto'}}>
                <Grid item xs={6}>
                    <Typography variant="h3"> Total price: {totalPrice}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" onClick={handleBuy}>Checkout</Button>
                </Grid>
            </Grid>
            <Dialog open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Bought Sucessfully"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Items bought successfully
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CartPage