import { productType } from "../../../entities/productItem"
import { Button, ButtonGroup, Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import BasicTabs from "../../../shared/CustomTabPanel"
import { AddToWishlistButton } from "../../../features/addToWishlist"
import { AddToCartButton } from "../../../features/addToCart"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { setChosenSize } from "../../../features/addToCart/model/cartSlice"

interface ProductDescriptionProps {
    product: productType
}

export const ProductDescription = ({ product }: ProductDescriptionProps) => {

    const dispatch = useAppDispatch()
    const { chosenSize } = useAppSelector(state => state.cartSlice)

    const handleChooseSizeClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // console.log(e.currentTarget)
        const choseSize = parseFloat(e.currentTarget.value)
        dispatch(setChosenSize(choseSize))
    }

    return (
        product &&
        <Paper elevation={0} sx={{ width: 500 }}>
            <List dense >
                <ListItem>
                    <Typography variant="h5">
                        {product.brandName.concat(' ').concat(product.model)}
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemText secondary='Color' />
                </ListItem>
                <ListItem>
                    <Typography variant="h5">
                        {/* TODO: make it a component */}
                        {product.onSale
                            ? <div style={{ display: 'flex', gap: '.3em' }}>
                                <Typography variant="h5" color="text.secondary">
                                    {Math.floor(parseInt(product.price) * 0.7) + ' €'}
                                </Typography>
                                <Typography sx={{ textDecoration: 'line-through', color: 'red' }} variant="h5" color="text.secondary">
                                    {product.price}
                                </Typography>
                            </div>
                            : <Typography variant="h5" color="text.secondary">
                                {product.price}
                            </Typography>
                        }
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemText secondary='Select a size' />
                </ListItem>
                <ListItem>

                    <Grid container >
                        {product.sizes.map(size =>
                            <Grid item key={size}>
                                <Button
                                    onClick={(e) => handleChooseSizeClick(e)}
                                    variant='text'
                                    value={size}
                                    sx={{
                                        width: 80,
                                        height: 50,
                                        padding: 0,
                                        border: '1px solid rgb(147, 147, 147)',
                                        borderRadius: 0,
                                        color: chosenSize === size ? 'red' : 'black'
                                    }}

                                >EU {size}</Button>
                            </Grid>
                        )}
                    </Grid>
                </ListItem>
                <ListItem>
                    <ButtonGroup orientation="vertical">
                        <AddToCartButton product={product} />
                        <AddToWishlistButton product={product} />
                    </ButtonGroup>
                </ListItem>
                <ListItem>
                    <BasicTabs />
                </ListItem>
            </List>
        </Paper>
    )
}
