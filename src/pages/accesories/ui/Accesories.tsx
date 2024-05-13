import { Container } from "@mui/material"
import { ProductList } from "../../../widgets/productList"
import { Sidebar } from "../../../widgets/sidebar"

export const Accesories = () => {
  return (
    <Container
      sx={{ display: 'flex' }}
    >
      <Sidebar />
      <ProductList category="Accesories" />
    </Container>
  )
}
