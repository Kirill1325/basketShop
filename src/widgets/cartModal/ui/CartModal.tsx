import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { toggleModal } from '../model/CartModalSlice';
import { productApi } from '../../../entities/productItem';
import { Button, Divider, List, ListItem, Stack, TextField } from '@mui/material';
import { ProductInCart } from '../../../entities/productInCart';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    right: 0,
    height: '100%',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
};

export const CartModal = () => {

    const { isOpened } = useAppSelector(state => state.cartModalSlice)
    const dispatch = useAppDispatch()

    const { data: productsInCart, refetch } = productApi.useGetAllProductsFromCartQuery()

    const initialSubtotal = 0
    const subtotal = productsInCart && productsInCart.reduce((accumulator, curValue) => {

        if (curValue.sizes.length > 1) {
            return accumulator + parseInt(curValue.price.slice(1)) * curValue.sizes.length
        } else {
            return accumulator + parseInt(curValue.price.slice(1))
        }



    }, initialSubtotal)


    // useEffect(() => {
    //     productsInCart?.map(product =>
    //         console.log(parseInt(product.price))
    //     )
    // }, [subtotal])

    const freeShippingAmout = 350

    const shippingPrice = subtotal && subtotal > freeShippingAmout ? 0 : 6.99

    const howMuchRemainsForFreeShipping = subtotal && freeShippingAmout - subtotal

    const total = subtotal && subtotal + shippingPrice

    // useEffect(() => {
    //     console.log(productsInCart)
    // }, [productsInCart])

    return (
        productsInCart &&
        <Modal
            open={isOpened}
            onClose={() => dispatch(toggleModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '2em'
                }}>
                    YOUR CART
                </Typography>
                <Divider variant="fullWidth" />
                <Stack sx={{ overflow: 'auto', height: '40vh' }} >
                    {productsInCart.map(product =>
                        product.sizes.map(size =>
                            <Box key={product.id + '' + size}>
                                <Divider variant="middle" />
                                <Link
                                    to={`/products/${product.id}`}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    onClick={() => dispatch(toggleModal())}>
                                    <ProductInCart product={product} size={size} refetch={refetch} />
                                </Link>
                            </Box>
                        )
                    )}
                </Stack>
                {shippingPrice === 0
                    ?
                    <Box sx={{
                        backgroundColor: 'rgb(212, 255, 224)',
                        margin: '3em 1em 1em',
                        height: '3em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography variant="caption" >
                            THIS ORDER QUALIFIES FOR FREE SHIPPING
                        </Typography>
                    </Box>
                    :
                    <Box sx={{
                        backgroundColor: 'rgb(197, 197, 197)',
                        margin: '3em 1em 1em',
                        height: '3em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography variant="caption" >
                            SPEND {howMuchRemainsForFreeShipping} € MORE FOR FREE SHIPPING
                        </Typography>
                    </Box>
                }
                <List>
                    <ListItem>
                        <Typography>Subtotal: €{subtotal}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Shipping: €{shippingPrice}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography sx={{ fontWeight: '600' }}>Total: €{total}</Typography>
                    </ListItem>

                </List>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TextField id="outlined-basic" label="Promocode" variant="outlined" fullWidth sx={{ margin: '1em ' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button fullWidth variant='contained' sx={{ margin: '1em ' }}>Checkout</Button>
                </Box>
            </Box>
        </Modal>
    );
}
