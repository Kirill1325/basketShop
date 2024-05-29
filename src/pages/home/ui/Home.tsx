import { Container } from "@mui/material"
import { ProductList } from "../../../widgets/productList"
import { HomePageImageList } from "../../../widgets/homePageImageList"


export const Home = () => {

    const ids = [1, 3, 4, 5, 6]

    return (
        <Container >
            <HomePageImageList />
            <ProductList category="Shoes" ids={ids} />
        </Container>
    )
}
