import { Container, Grid } from '@mui/material'
import { productApi, ProductItem } from '../../../entities/productItem'
import { useAppSelector } from '../../../app/store'

interface ProductListProps {
  category: string
}

export const ProductList = ({ category }: ProductListProps) => {

  const { data: products } = productApi.useGetAllProductsQuery()

  const { value } = useAppSelector(state => state.sliderSlice)



  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {products &&
          products
            .filter(product => product.category === category)
            .filter(product => parseInt(product.price.slice(1)) <= value[1] && parseInt(product.price.slice(1)) >= value[0])
            .map(product =>
              <Grid item xs={2} sm={4} md={4} key={product.id}>
                <ProductItem product={product} />
              </Grid>

            )}
      </Grid>
    </Container>

  )
}
