import { Container, Grid } from '@mui/material'
import { productApi, ProductItem } from '../../../entities/productItem'

interface ProductListProps {
  category: string
}

export const ProductList = ({ category }: ProductListProps) => {

  const { data: products } = productApi.useGetAllProductsQuery()

  // const { data: productsInWishlist } = productApi.useGetProducFromWishlistsByIdQuery()

  // const dispatch = useAppDispatch()
  // const {productInWishlistState} = useAppSelector(state => state.wishlistSlice)

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {products && products.filter(product => product.category === category).map(product =>
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>

        )}
      </Grid>
    </Container>

  )
}
