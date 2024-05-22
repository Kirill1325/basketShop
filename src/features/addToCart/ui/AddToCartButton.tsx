import { Button } from "@mui/material"
import { productApi, productType } from "../../../entities/productItem"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { useIfSizeInCart } from "../lib/checkIfInCart"
import { setChosenSize } from "../model/cartSlice"

interface AddToCartButtonProps {
    product: productType
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {

    const { chosenSize } = useAppSelector(state => state.cartSlice)
    const dispatch = useAppDispatch()

    const [addToCart] = productApi.useAddToCartMutation()
    const [updateCart] = productApi.useUpdateCartMutation()

    const [deleteFromCart] = productApi.useDeleteFromCartMutation()

    const { data: productInCart, isError, refetch } = productApi.useGetProductFromCartByIdQuery(product.id)

    const isInCart = useIfSizeInCart(product.id, chosenSize)

    const handleAddToCArtClick = () => {
        // TODO: when size added, open cart model
        if (isInCart && productInCart && productInCart.sizes.length === 1) {
            // If the product is in the cart and it has only one size, delete the entire product from the cart
            deleteFromCart(productInCart.id)
        } else {
            // POST
            // if product is not in cart yet, add it with one size
            if (isError && chosenSize !== null) {
                const productToAddToCart = {
                    ...product,
                    sizes: [chosenSize]
                } as productType
                addToCart(productToAddToCart)
            }
            // PUT
            // if this product already in a cart, add new sizes
            if (!isError && chosenSize !== null && !isInCart && productInCart) {
                const productToUpdateInCart = {
                    ...productInCart,
                    sizes: [...productInCart.sizes, chosenSize]
                } as productType
                updateCart(productToUpdateInCart)
            }
            if (!isError && chosenSize !== null && isInCart && productInCart) {
                // chosen size is in cart(delete when clicked)
                const productToUpdateInCart = {
                    ...productInCart,
                    sizes: [...productInCart.sizes.filter(size => size !== chosenSize)]
                } as productType
                console.log(productToUpdateInCart)
                updateCart(productToUpdateInCart)

            }
        }
        dispatch(setChosenSize(null))
        refetch()
    }

    return (
        <Button onClick={() => handleAddToCArtClick()} sx={{ width: 300 }} variant="contained">
            {isInCart ? 'Remove From Cart' : 'Add To Cart'}
        </Button>
    )
}
