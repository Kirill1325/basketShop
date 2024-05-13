import { Container } from "@mui/material"
import { ProductList } from "../../../widgets/productList"
import { Sidebar } from "../../../widgets/sidebar"

const clothesSizesGrid = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']

export const Clothes = () => {
  return (
    <Container
      sx={{ display: 'flex' }}
    >
      <Sidebar sizesGrid={clothesSizesGrid} />
      <ProductList category="Clothes" />
    </Container>
  )
}
