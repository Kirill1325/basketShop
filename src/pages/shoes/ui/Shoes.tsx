import { Container } from "@mui/material"
import { ProductList } from "../../../widgets/productList"
import { Sidebar } from "../../../widgets/sidebar"
import { range } from "../../../shared/arrayRange"

const shoeSizesGrid = range(35, 51, 0.5).map(size => size.toString())

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
