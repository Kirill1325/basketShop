import { Container, Grid } from '@mui/material'
import { productApi, ProductItem } from '../../../entities/productItem'
import { useAppSelector } from '../../../app/store'

interface ProductListProps {
  category: string
}

export const ProductList = ({ category }: ProductListProps) => {

  const { data: products } = productApi.useGetAllProductsQuery()

  const { priceValue } = useAppSelector(state => state.sliderSlice)
  const { brandnameSortValue } = useAppSelector(state => state.filterByBrandNameSlice)
  const { sizeSortValue } = useAppSelector(state => state.filterBySizeSlice)
  const { searchValue } = useAppSelector(state => state.searchSlice)

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {products &&
          products
            .filter(product => product.category === category)
            .filter(product => parseInt(product.price.slice(1)) <= priceValue[1] && parseInt(product.price.slice(1)) >= priceValue[0])
            .filter(product => brandnameSortValue[product.brandName])
            .filter(product => product.sizes.filter(size =>
              sizeSortValue[size] || size === 'ONE SIZE'
            ).length > 0)
            .filter(product => (`${product.brandName.toLowerCase()} ${product.model.toLowerCase()}`.match(searchValue.toLowerCase())))
            .map(product =>
              <Grid item xs={2} sm={4} md={4} key={product.id}>
                <ProductItem product={product} />
              </Grid>

            )}
      </Grid>
    </Container>

  )
}
