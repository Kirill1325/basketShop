import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { productApi, ProductItem } from '../../../entities/productItem'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { Category } from '@mui/icons-material'
import { toggleMobileFilterBarModal } from '../../mobileFilterBar/model/mobileFilterBarSlice'

interface ProductListProps {
  category: string
  ids?: number[]
}

export const ProductList = ({ category, ids }: ProductListProps) => {

  const { data: products } = productApi.useGetAllProductsQuery()

  const { priceValue } = useAppSelector(state => state.sliderSlice)
  const { brandnameSortValue } = useAppSelector(state => state.filterByBrandNameSlice)
  const { sizeSortValue } = useAppSelector(state => state.filterBySizeSlice)
  const { searchValue } = useAppSelector(state => state.searchSlice)

  const dispatch = useAppDispatch()

  const sortedProductList = products && products
    .filter(product => product.category === category)
    .filter(product => parseInt(product.price.slice(1)) <= (priceValue as number[])[1] && parseInt(product.price.slice(1)) >= (priceValue as number[])[0])
    .filter(product => brandnameSortValue[product.brandName])
    .filter(product => product.sizes.filter(size =>
      sizeSortValue[size] || size === 'ONE SIZE'
    ).length > 0)
    .filter(product => (`${product.brandName.toLowerCase()} ${product.model.toLowerCase()}`.match(searchValue.toLowerCase())))

  return (
    <Container>
      <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: 3 }}>{category.toUpperCase()}</Typography>
      <Box sx={{ marginBottom: 2, display: ' flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography >{sortedProductList && sortedProductList.length} products</Typography>
        <Button
          onClick={() => dispatch(toggleMobileFilterBarModal())}
          variant='outlined'
          sx={{
            width: 150,
            display: {
              sm: 'block',
              md: 'none'
            }
          }}
        >Filter</Button>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }}  >

        {sortedProductList &&
          sortedProductList
            .map(product =>
              <Grid item sm={4} md={4} key={product.id}>
                <ProductItem product={product} />
              </Grid>

            )}
      </Grid>
    </Container>

  )
}
