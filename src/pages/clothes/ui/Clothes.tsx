import { Container } from "@mui/material"
import { ProductList } from "../../../widgets/productList"
import { Sidebar } from "../../../widgets/sidebar"
import { clothesSizesGrid } from "../../../shared/sizeGrids"


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
