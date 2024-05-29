import { Container } from "@mui/material"
import { ProductList } from "../../../widgets/productList"
import { Sidebar } from "../../../widgets/sidebar"
import { shoeSizesGrid } from "../../../shared/sizeGrids"

export const Shoes = () => {
  return (
    <Container
      sx={{ display: 'flex' }}
    >
      <Sidebar sizesGrid={shoeSizesGrid} />
      <ProductList category="Shoes"/>
    </Container>
  )
}
