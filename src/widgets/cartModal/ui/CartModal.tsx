import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { toggleModal } from '../model/CartModalSlice';
import { productApi } from '../../../entities/productItem';
import { List, ListItem } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    right: 0,
    height: '100%',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    padding: 4,
};

export const CartModal = () => {

    const { isOpened } = useAppSelector(state => state.cartModalSlice)
    const dispatch = useAppDispatch()

    const { data: productsInCart } = productApi.useGetAllProductsFromCartQuery()

    return (
        productsInCart &&
        <Modal
            open={isOpened}
            onClose={() => dispatch(toggleModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Your Cart
                </Typography>
                <List>
                    {productsInCart.map(product =>
                        <ListItem key={product.id}>
                            <Typography>{product.brandName} {product.model}</Typography>
                            <List>
                                {product.sizes.map(size =>
                                    <ListItem key={size}>
                                        {size}
                                    </ListItem>
                                )}
                            </List>
                        </ListItem>
                    )}
                </List>
            </Box>
        </Modal>
    );
}
