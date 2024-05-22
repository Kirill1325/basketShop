import { productApi, productType } from '../../../entities/productItem';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { toggleWishlist } from '..';

interface AddToWishlistIconProps {
    product: productType,
}

export const AddToWishlistIcon = ({ product }: AddToWishlistIconProps) => {

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
            // deleteFromWishlist(2)
            deleteFromWishlist(product.id)
        } else {
            addToWishlist(product)
            // deleteFromWishlist(2)
        }
    }

    return (
        <IconButton onClick={(e) => handleAddToWishlist(e)} sx={{ position: 'absolute', top: 0, right: 0 }} aria-label="add to wishlist">
            {productInWishlistState[product.id]
                ? <FavoriteIcon />
                : <FavoriteBorderIcon />
            }
        </IconButton>
    )
}
