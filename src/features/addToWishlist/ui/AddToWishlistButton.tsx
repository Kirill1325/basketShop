import { useAppDispatch, useAppSelector } from "../../../app/store"
import { productApi, productType } from "../../../entities/productItem"
import { toggleWishlist } from "../model/WishlistSlice"
import { Button } from "@mui/material"

interface AddToWishlistButtonProps {
    product: productType
}

export const AddToWishlistButton = ({ product }: AddToWishlistButtonProps) => {

    const [addToWishlist] = productApi.useAddToWishlistMutation()
    const [deleteFromWishlist] = productApi.useDeleteFromWishlistMutation()

    const dispatch = useAppDispatch()
    const { productInWishlistState } = useAppSelector(state => state.wishlistSlice)

    const handleAddToWishlist = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.persist();
        e.stopPropagation();
        e.preventDefault();
        dispatch(toggleWishlist(product.id))
        if (productInWishlistState[product.id]) {
            deleteFromWishlist(product.id)
        } else {
            addToWishlist(product)
        }
    }
    // TODO: change style when added in wishlist

    return (
        <Button sx={{ width: 300 }} variant="text" onClick={(e) => handleAddToWishlist(e)}>
            {productInWishlistState[product.id]
                ? 'Remove From Wishlist'
                : 'Add To Wishlist'}
        </Button>
    )
}
