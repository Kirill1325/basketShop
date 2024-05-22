import { Typography, List, ListItem, Box, IconButton, Divider } from "@mui/material"
import { productApi, productType } from "../../productItem"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { QueryActionCreatorResult, QueryDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query";

interface ProductInCartProps {
    product: productType,
    size: string,
    refetch: () => QueryActionCreatorResult<QueryDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, productType[], "api">>
}

export const ProductInCart = ({ product, size, refetch }: ProductInCartProps) => {

    const { data: productInCart } = productApi.useGetProductFromCartByIdQuery(product.id)

    const [deleteFromCart] = productApi.useDeleteFromCartMutation()
    const [updateCart] = productApi.useUpdateCartMutation()

    // console.log(product.sizes)

    // useEffect(() => {
    //     productInCart && console.log(productInCart.sizes.length)
    //     productInCart && console.log(productInCart)
    // }, [productInCart && productInCart.sizes.length])

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // TODO: fix
        e.persist();
        e.stopPropagation();
        e.preventDefault();
        if (productInCart && productInCart.sizes.length === 1) {
            deleteFromCart(productInCart.id)
        } else {
            if (productInCart) {

                const productToUpdateInCart = {
                    ...productInCart,
                    sizes: [...productInCart.sizes.filter(s => s !== size)]
                } as productType
                updateCart(productToUpdateInCart)
            }
        }
        refetch()
    }

    return (
        <List sx={{ display: 'flex', flexDirection: 'row', margin: '0 1em' }}>
            <Divider variant="fullWidth" />

            <ListItem sx={{ flexBasis: '25%', padding: 0 }}>
                <Box >
                    <img src={product.img} alt="image" style={{ width: '6em' }} />
                </Box>
            </ListItem>

            <ListItem sx={{ flexBasis: '70%', padding: '0 0 0 1em' }}>
                <Box sx={{ height: '100%' }}>
                    <Typography variant="subtitle1">{product.brandName} {product.model}</Typography>
                    <Typography variant="caption">{product.category}</Typography>
                    <Typography>{size !== 'ONE SIZE' && 'EU ' + size}</Typography>
                    <Typography sx={{ fontWeight: '600' }}>{product.price}</Typography>
                </Box>
            </ListItem>

            <ListItem sx={{ flexBasis: '5%', padding: 0, alignSelf: 'flex-start' }}>
                <IconButton
                    onClick={(e) => handleDeleteClick(e)}
                    sx={{

                        "&:hover": {
                            backgroundColor: 'white'
                        }
                    }}>
                    <DeleteOutlineOutlinedIcon sx={{
                        color: 'rgb(103, 103, 103)',
                        "&:hover": {
                            color: 'black',
                            backgroundColor: 'white'
                        }
                    }} />
                </IconButton>
            </ListItem>

        </List>
    )
}
